const ReviewSchema=require("./models/review.js");

module.exports.isLoggedIn=((req, res, next)=> {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
});
module.exports.validateReview =(req,res,next)=>{
    let {error} = ReviewSchema.validate(req.body);
  if(error){
    let errormsg=error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400 , errormsg);
  } 
  else{
    next();
  }
};