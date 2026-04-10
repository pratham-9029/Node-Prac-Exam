import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
})

const User = new mongoose.model('USER',userSchema);

export default User;