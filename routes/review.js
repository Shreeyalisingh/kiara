const express=require("express");
const router=express.Router({mergeParams:true});
const {isLoggedIn,validateReview }=require("../middleware.js");
const Review=require("../models/review.js");
const mens=require("../models/mens.js");
const women=require("../models/women.js");
const child=require("../models/child.js");
const ele=require("../models/electric.js");

router.post("/", isLoggedIn, validateReview, async (req, res) => {
    let data = await mens.findById(req.params.id)
        || await women.findById(req.params.id)
        || await child.findById(req.params.id)
        || await ele.findById(req.params.id);
    if (!data) {
        return res.redirect("/clothing");
    }
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    await newReview.save();
    data.reviews.push(newReview);
    await data.save();

    res.redirect(`/clothing/${data.person}/${data._id}`);
});


     
     //review delete
     router.delete("/:reviewId",isLoggedIn,validateReview,async (req, res) => {
        let { id, reviewId } = req.params;
        let data = await mens.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
        || await women.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
        || await child.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
        ||await ele.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
        await Review.findByIdAndDelete(reviewId);
        res.redirect(`/clothing/women`);
    });
     

     module.exports=router;