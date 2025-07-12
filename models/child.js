const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const Review=require("./review.js");

const ChildSchema=new Schema({
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
ChildSchema.post("findOneAndDelete",async(ChildClothing)=>{
    if(ChildClothing){
        await Review.deleteMany({_id : { $in: ChildClothing.reviews}});
    }
});

const ChildClothing=mongoose.model("ChildClothing",ChildSchema);

module.exports=ChildClothing;