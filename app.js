require("dotenv").config();
const express=require("express");
const app=express();
const path=require("path");
const ejsmate=require("ejs-mate");
const mongoose=require("mongoose");
const electric=require("./models/electric.js");
const User=require("./models/user.js");
const methodOveride=require("method-override");
const cookieParser=require("cookie-parser");
const session=require("express-session");
const passport=require("passport");
const passportLocal=require("passport-local");
const multer=require("multer");
const cart=require("./models/cart.js");
const clothing=require("./routes/clothing.js");
const dashboard=require("./routes/dashboard.js");
const login=require("./routes/login.js");
const search=require("./routes/search.js");
const carte=require("./routes/cart.js");
const reviewrouter=require("./routes/review.js");
const flash=require("connect-flash");
const Google=require("passport-google-oauth20");
const { client } = require('./paypal');
const paypal = require('@paypal/checkout-server-sdk');

//middleware
app.engine("ejs",ejsmate);
app.use(methodOveride("_method"));
app.use(cookieParser())
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//database connection 
async function main() {
   await mongoose.connect(process.env.ATLASDB_URL);
};
main()
.then((res)=>{
   console.log("connected to db");
})
.catch((err)=>{
   console.log(err);
});


app.use(session({
   secret: "KiraStorage",
   resave: false,
   saveUninitialized: true,
   cookie: {
       expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
       maxAge: 7 * 24 * 60 * 60 * 1000,
       httpOnly: true,
   }}));
   app.use(passport.initialize());
   app.use(passport.session());
   passport.use(new Google({
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
  },
  (accessToken,refreshToken,profile,done)=>{
      return done(null,profile)
  }));
  passport.serializeUser((user,done)=> done(null,user));
  passport.deserializeUser((user,done)=>done(null,user));  
   
   passport.use(new passportLocal(User.authenticate()));
   passport.serializeUser(User.serializeUser());
   passport.deserializeUser(User.deserializeUser());
   app.use(flash());

//local variable
app.use(async (req, res, next) => {
   if (req.isAuthenticated()) {
      const user = await User.findById(req.user._id);
      res.locals.items = user.cart.length;
      console.log(user);
  } else {
      res.locals.items = 0;
  }
     res.locals.currUser=req.user;
     res.locals.success=req.flash("success");
     res.locals.error=req.flash("error");
   next();
 });
 
 
//routes
app.use("/clothing",clothing);
app.use(login);
app.use(dashboard);
app.use(search);
app.use(carte);
 app.use("/listings/:id/review",reviewrouter);

 app.get("/home",async(req,res)=>{
   res.render("utils/index.ejs");
});
app.get("/",(req,res)=>{
   res.redirect("/home");
});
//electronics
app.get("/electronics",async(req,res)=>{
   let ele=await electric.find({});
   res.render("./clothing/collect/electronics.ejs",{ele}); 
});
app.get("/clothing/electronics/:id",async(req,res)=>{
   let id=req.params.id;
   let clothInfo=await electric.findById(id).populate({
      path: "reviews",
      populate: { path: "author" } 
  })
  .populate("owner");;
   if(clothInfo){
   res.render("./clothing/show/showelectric.ejs",{clothInfo});
   }
   else{
      res.status(400).send("item not found");
   }
});

//delete route

app.delete("/delete/cart", async (req, res) => {
   let id = req.body.id; 
   try {
       await cart.findByIdAndDelete(id); 
       if (req.isAuthenticated()) {
         await User.findByIdAndUpdate(req.user._id, { $pull: { cart: id } });
      }
      req.flash("success","Item removed from cart!!");
       res.redirect("/cart"); 
   } catch (error) {
       console.error("Error deleting item:", error);
       res.status(500).send("An error occurred while trying to delete the item.");
   }
});

//google login
app.get("/auth/google", passport.authenticate('google', {scope: ['profile','email']}));

app.get(
   "/auth/google/callback",
   passport.authenticate('google', { failureRedirect: '/home' }),
   async (req, res) => {
     const googleProfile = req.user;
     const username = googleProfile.displayName;
     const email = googleProfile.emails[0].value;
 
       let user = await User.findOne({ email });
       if (!user) {  
         user = new User({
           username,
           email,
           cart: [], 
         });
         await user.save();
       }
       req.login(user, (err) => {
         if (err) return next(err);
         res.redirect("/home");
       });
     } 
 );

// Capture PayPal payment
app.post("/capture-paypal-order", async (req, res) => {
    const { orderID } = req.body;
    
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    try {
        const capture = await client().execute(request);
        
        if (capture.result.status === 'COMPLETED') {
            if (req.isAuthenticated()) {
                const user = await User.findById(req.user._id);
                // Delete all cart items
                await cart.deleteMany({ _id: { $in: user.cart } });
                // Clear user's cart array
                await User.findByIdAndUpdate(req.user._id, { $set: { cart: [] } });
            }
            
            res.json({ 
                success: true, 
                captureID: capture.result.id,
                message: "Payment completed successfully" 
            });
        } else {
            res.json({ 
                success: false, 
                message: "Payment not completed" 
            });
        }
    } catch (err) {
        console.error("PayPal capture error:", err);
        res.status(500).json({ 
            success: false, 
            message: "Error capturing PayPal payment" 
        });
    }
});

// Payment success page
app.get("/payment-success", (req, res) => {
    req.flash("success", "Payment completed successfully! Thank you for your purchase.");
    res.render("utils/payment.ejs");
});

// create order route 
app.post("/create-paypal-order", async (req, res) => {
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    
    const { amount } = req.body;
    
    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [{
            amount: {
                currency_code: "USD",
                value: amount
            },
            description: "Cart purchase"
        }]
    });

    try {
        const order = await client().execute(request);
        res.json({ orderID: order.result.id });
    } catch (err) {
        console.error("PayPal order creation error:", err);
        res.status(500).json({ 
            success: false, 
            message: "Error creating PayPal order" 
        });
    }
});

app.listen(8080,()=>{
   console.log("server started at http://localhost:8080");
});
app.get("*",(req,res)=>{
   res.send("page not found !!");
});