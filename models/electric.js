const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const Review=require("./review.js");

const eleSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    category:String,
    price:{
        type:Number,
        required:true,
    },
    brand:String,
    stock:Number,
    description:{
       type:String,
       required:true,
    },
    image:String,
    person:{
        type:String,
        required:true,
     },
     reviews:[{
        type:Schema.Types.ObjectId,
        ref:"review"
    }],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});
eleSchema.post("findOneAndDelete",async(ele)=>{
    if(ele){
        await Review.deleteMany({_id : { $in: ele.reviews}});
    }
});

const ele=mongoose.model("electronic",eleSchema);

module.exports=ele;