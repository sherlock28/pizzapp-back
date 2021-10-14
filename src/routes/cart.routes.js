const router = require("express").Router();
const { cartCtrl } = require("../controllers");
// const { users, auth } = require("../middlewares");

router.post("/cart", cartCtrl.addItemToCart);
// router.get("/cart/:id_user", cartCtrl.getCartByUserId);
// router.delete("/cart/:id", orderCtrl.deleteItemFromCart);
// router.delete("/cart/empty/:id", orderCtrl.emptyCart);

module.exports = router;
