const mongoose = require('mongoose');


const sauceSchema = mongoose.Schema(
    
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        manufacturer:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        mainPepper:{
            type:String,
            required:true
        },
        imageUrl:{
            type:String
        },
        heat:{
            type:number,
            required:true
        },
        likes:{
            type:number
        },
        dislikes:{
            type:number
        },
        usersLiked:{
            type:Array
        },
        usersDisliked:{
            type:Array
        },
        userId:{
            type:String,
            required:true
        }
    }
);

module.exports = mongoose.model('sauce',sauceSchema);