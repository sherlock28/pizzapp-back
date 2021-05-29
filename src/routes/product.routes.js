const router = require('express').Router();
const { productCtrl } = require('../controllers');

router.get('/product', productCtrl.getAllPizzas);
router.post('/product', productCtrl.postPizza);
router.delete('/product/:id_product', productCtrl.deleteProduct);

module.exports = router;