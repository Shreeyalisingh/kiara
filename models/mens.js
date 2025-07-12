const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const Review=require("./review.js");
const MenSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    category:String,
    price:{
        type:Number,
        required:true,
    },
    sizes:[String],
    color:String,
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
MenSchema.post("findOneAndDelete",async(MenClothing)=>{
    if(MenClothing){
        await Review.deleteMany({_id : { $in: MenClothing.reviews}});
    }
});

const mensClothing=mongoose.model("menClothing",MenSchema);

module.exports=mensClothing;