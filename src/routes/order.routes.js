const router = require("express").Router();
const { orderCtrl } = require("../controllers");
// const { users, auth } = require("../middlewares");

router.post("/order", orderCtrl.postOrder);
// router.get("/order", orderCtrl.);
// router.get("/order/:id",  orderCtrl.);

module.exports = router;
