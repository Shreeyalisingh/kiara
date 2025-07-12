const express=require("express");
const mens=require("../models/mens.js");
const women=require("../models/women.js");
const child=require("../models/child.js");
const electric=require("../models/electric.js");
const router=express.Router({mergeParams:true});


//men clothing
router.get("/men",async(req,res)=>{
    let men=await mens.find({});
    res.render("./clothing/collect/men.ejs",{men}); 
 });
 
 router.get("/men/:id",async(req,res)=>{
    let id=req.params.id;
    let clothInfo = await mens.findById(id)
    .populate({
        path: "reviews",
        populate: { path: "author" } // Check that "author" is a reference to "User"
    })
    .populate("owner");
    if(clothInfo){
    res.render("./clothing/show/showmen.ejs",{clothInfo});
    }
    else{
       res.status(400).send("item not found");
    }
 });

 //women clothing
router.get("/women",async(req,res)=>{
    let men=await women.find({});
    res.render("./clothing/collect/men.ejs",{men}); 
 });
 
 router.get("/women/:id",async(req,res)=>{
    let id=req.params.id;
    let clothInfo = await women.findById(id)
    .populate({
        path: "reviews",
        populate: { path: "author" }
    })
    .populate("owner");
    if(clothInfo){
    res.render("./clothing/show/showmen.ejs",{clothInfo});
    }
    else{
       res.status(400).send("item not found");
    }
 });

 router.get("/children",async(req,res)=>{
    let men=await child.find({});
    res.render("./clothing/collect/men.ejs",{men}); 
 });
 router.get("/children/:id",async(req,res)=>{
    let id=req.params.id;
    let clothInfo = await child.findById(id)
    .populate({
        path: "reviews",
        populate: { path: "author" } 
    })
    .populate("owner");
    if(clothInfo){
    res.render("./clothing/show/showmen.ejs",{clothInfo});
    }
    else{
       res.status(400).send("item not found");
    }
 });

 router.get("/electronics/:id",async(req,res)=>{
    let id=req.params.id;
    let clothInfo = await electric.findById(id)
    .populate({
        path: "reviews",
        populate: { path: "author" } 
    })
    .populate("owner");
    if(clothInfo){
    res.render("./clothing/show/showelectric.ejs",{clothInfo});
    }
    else{
       res.status(400).send("item not found");
    }
 });
 
 module.exports=router;