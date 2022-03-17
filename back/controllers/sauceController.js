const sauceModel = require('../models/sauceModel');

module.exports.allSauces = async (req,res)=>{
    try{
        const sauces = await sauceModel.find();
        res.status(200).json({sauces})
    }
    catch(err){
        res.status(400).send(err);
    }
}

module.exports.createSauce = async (req,res)=>{
    const {sauce, image} = req.body;

    try{
      const sauce = await sauceModel.create({sauce,image});
      res.status(201).json({sauce:sauce._id});
    }
    catch(err){
      res.status(400).send({err})
    }
}