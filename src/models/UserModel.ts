import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{type:String,require:true},
    useremail:{type:String,required:true},
    userpassword:{type:String,required:true}
},{
    timestamps:true
})

const UserSchema=mongoose.model("UsersSchema",userSchema)

export {UserSchema}