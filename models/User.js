const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        minLength:3,
        required:true
    },
    lastName:{
        type:String,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        minLength:10,
    },
    phoneNumber:{
        type:Number,
        minLength:10
    },
    gender:{
        type:String,
        enum:['male', 'female'],
        required:true
    },
    isHost:{
        type:Boolean,
        required:true,
        default:false
    },
    address:{
        type:String
    },
    profileImg:{
        type:String
    },
    unit:{type:mongoose.Types.ObjectId, ref:'Unit'}
},{timestamps:true});

const UserModel= mongoose.model('Uesr', UserSchema);

module.exports = UserModel;