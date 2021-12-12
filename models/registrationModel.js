const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const registerSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailAddress:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    gender:[{
        male:[0,1],
        female:[0,1]
}]
},{timestamps:true});

const Register=mongoose.model('Register',registerSchema);
module.exports=Register;