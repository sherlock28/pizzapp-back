const router = require("express").Router();
const { orderCtrl } = require("../controllers");
// const { users, auth } = require("../middlewares");

router.post("/orders", orderCtrl.postOrder);
router.get("/orders", orderCtrl.getOrdersByUser);
router.get("/orders/:order_id", orderCtrl.getOrderById);

module.exports = router;
