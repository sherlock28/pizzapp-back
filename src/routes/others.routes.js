const router = require("express").Router();
const { healthCtrl } = require("../controllers");

router.get("/health", healthCtrl.healthCheck);

module.exports = router;
