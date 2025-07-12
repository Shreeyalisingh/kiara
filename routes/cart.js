const express=require("express");
const cart=require("../models/cart.js");
const User=require("../models/user.js");
const { isLoggedIn } = require("../middleware");
const router=express.Router();

router.post("/cart",async(req,res)=>{
    const cloth = new cart(req.body.cloth);
    await cloth.save();
    const user = await User.findById(req.user._id); 
    user.cart.push(cloth._id); 
    await user.save();
    req.flash("success","item added to cart!!");
    res.redirect("/cart");
});

router.get("/cart",isLoggedIn,async(req,res)=>{
try {
  const user = await User.findById(req.user._id).populate("cart"); 
  console.log(user.cart);
  res.render("./utils/cart.ejs", { allCart: user.cart });
} catch (err) {
  console.error("Error fetching cart items:", err);
  res.status(500).send("An error occurred while fetching the cart.");
}
});

router.get("/cart/:id",async(req,res)=>{
let id=req.params.id;
let clothInfo=await cart.findById(id);
if(clothInfo){
res.render("./utils/showCloth.ejs",{clothInfo});
}
else{
  res.status(400).send("item not found");
}
});

module.exports=router;