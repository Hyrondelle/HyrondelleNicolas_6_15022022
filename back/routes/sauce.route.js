const router = require('express').Router();
const sauceController = require('../controllers/sauceController');

router.get('/',sauceController.allSauces);
router.post('/',sauceController.createSauce)


module.exports = router;