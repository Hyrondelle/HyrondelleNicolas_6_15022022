const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/auth/signup',userController.signup);
router.post('/auth/login',userController.login);

module.exports = router;