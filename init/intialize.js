const mongoose=require("mongoose");
const url="mongodb://127.0.0.1:27017/kiara";
const mensData=require("./mens.js");
const men=require("../models/mens.js");
const women=require("../models/women.js");
const womendata=require("./women.js");
const electronic=require("../models/electric.js");
const ele=require("./electronics.js");
const child=require("../models/child.js");
const ch=require("./child.js");
require("dotenv").config();

async function main(){
    await mongoose.connect("mongodb+srv://vbhargav0310:Jaimatadi@cluster0.yo8jy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}
main()
.then((res)=>{
    console.log("connection succesful");
})
.catch((err)=>{
    console.log(err);
});

const initailize=async()=>{
    try{
     await men.deleteMany({});
     await men.insertMany(mensData.data);
     await women.deleteMany({});
     await women.insertMany(womendata.data);
     await electronic.deleteMany({});
     await electronic.insertMany(ele.data);
     await child.deleteMany({});
     await child.insertMany(ch.data);
     console.log("data added");}
     catch(err){
        console.log(err);
     }
}

initailize();