const express=require("express");
const User=require("../models/user.js");
const passport=require("passport");
const router=express.Router();


router.get("/signup",(req,res)=>{
    res.render("./user/signup.ejs");
 });
 
 router.post("/signup",async(req,res)=>{
    const { username, email, password,role } = req.body;
     try {
         const user = new User({ username, email , role});
         const reg=await User.register(user, password);
         req.login(reg,(err)=>{
          if(err){
              return next(err);
          }
          req.flash("success","Login Successfull!");
         res.redirect("/home")});
     } catch (err) {
         req.flash("error",err);
         console.error("Error registering user:", err);
         res.render("./utils/error.ejs",{err});
     }
 });
 
 router.get("/login",(req,res)=>{
    res.render("./user/login.ejs");
 });
 
 router.post("/login",passport.authenticate("local", {
     failureRedirect: "/login", 
     failureFlash: true
   }), (req,res)=>{
      req.flash("success","Login Successfull!");
    res.redirect("/home");
   });
 router.get("/logout",(req,res,next)=>{
    req.logOut((err)=>{
       if(err){
          return next(err);
       }
    });
    req.flash("success","Logout Successfull!");
    res.redirect("/home");
 });
 
 module.exports=router;