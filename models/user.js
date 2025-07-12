const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role:{type:String, default:"admin"},
    cart: [{
        type: Schema.Types.ObjectId,
        ref: "cart",  
    }]
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
