const router = require("express").Router();
const { productCtrl } = require("../controllers");
const { auth } = require("../middlewares");

router.get("/products", productCtrl.getAllPizzas);
router.get("/products/:id_product", productCtrl.getPizzaById);
router.post("/products", productCtrl.postPizza);
router.delete("/products/:id_product", productCtrl.deleteProduct);
router.put("/products/:id_product", productCtrl.updateProduct);

module.exports = router;
