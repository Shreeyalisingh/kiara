const express=require("express");
const mens=require("../models/mens.js");
const women=require("../models/women.js");
const electric=require("../models/electric.js");
const child=require("../models/child.js");
const router=express.Router();


router.post("/search",async(req,res)=>{
    req.session.data = req.body.categories;
    res.redirect("/search");
 });
 router.get("/search",async(req,res)=>{
    try{
    let cate=req.session.data;
    let cat=cate.toLowerCase();
    let man=await mens.find({category:cat}).exec();
    let woman=await women.find({category:cat}).exec();
    let children=await child.find({category:cat}).exec();
    let ele=await electric.find({category:cat}).exec();
    const results = await Promise.all([man,woman,children,ele]);
    const men = [].concat(...results);
    if(men.length===0){
       return res.send("Sorry,Item Not found!!");
    }
    res.render("./clothing/collect/men.ejs",{men}); }
    catch(err){
       res.send("Item Not Found");
    }
 });

 module.exports=router;