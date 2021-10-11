const router = require("express").Router();
const { productCtrl } = require("../controllers");
const { auth } = require("../middlewares");

router.get("/products", productCtrl.getAllProduct);
router.get("/products/:id_product", productCtrl.getProductById);
router.post("/products", productCtrl.postProduct);
router.delete("/products/:id_product", productCtrl.deleteProduct);
router.put("/products/:id_product", productCtrl.updateProduct);

module.exports = router;
