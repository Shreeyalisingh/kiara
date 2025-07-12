const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const Review=require("./review.js");
const WomenSchema=new Schema({
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
WomenSchema.post("findOneAndDelete",async(WomenClothing)=>{
    if(WomenClothing){
        await Review.deleteMany({_id : { $in: WomenClothing.reviews}});
    }
});

const WomenClothing=mongoose.model("WomenClothing",WomenSchema);

module.exports=WomenClothing;