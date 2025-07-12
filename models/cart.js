const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const cartSchems=new Schema({
    name:{
        type:String,
        required:true,
    },
    category:String,
    price:{
        type:Number,
        required:true,
    },
    size:String,
    color:String,
    stock:Number,
    description:{
       type:String,
       required:true,
    },
    image:String,
});

const cart=mongoose.model("cart",cartSchems);

module.exports=cart;