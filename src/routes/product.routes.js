const router = require('express').Router();
const { productCtrl } = require('../controllers');

router.get('/product', productCtrl.getAllPizzas);

module.exports = router;