const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://nicolas:nicolas1711@cluster0.38ygp.mongodb.net/hotP6",
    {useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        if(!err)console.log('database connected');
        else console.log('connexion error: '+err);
    }
)