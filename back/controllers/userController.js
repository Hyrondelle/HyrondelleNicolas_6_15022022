const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports.signup = async (req, res)=>{
    const {email, password} = req.body;

    try{
      const user = await userModel.create({email,password});
      res.status(201).json({user:user._id});
    }
    catch(err){
      res.status(200).send({err})
    }
};

module.exports.login = async (req,res)=>{
  userModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      userModel.findOne({password:req.body.password})
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: 'TOKEN'
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}
