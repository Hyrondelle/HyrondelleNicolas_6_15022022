const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema(
    
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
);
userSchema.plugin(uniqueValidator);
const userModel = mongoose.model('user',userSchema);
module.exports = userModel;