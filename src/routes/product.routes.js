const router = require('express').Router();
const { productCtrl } = require('../controllers');

router.get('/product', productCtrl.getAllPizzas);
router.post('/product', productCtrl.postPizza);

module.exports = router;