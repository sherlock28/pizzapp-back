const router = require('express').Router();
const { productCtrl } = require('../controllers');

router.get('/product', productCtrl.getAllPizzas);
router.post('/product', productCtrl.postPizza);
router.delete('/product/:id_product', productCtrl.deleteProduct);
router.put('/product/:id_product', productCtrl.updateProduct);

module.exports = router;