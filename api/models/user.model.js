import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
       
    }
    
},{timestamps:true}) //timestamp for a user time of creation and edit

const User = mongoose.model('User',userSchema)
export default User;