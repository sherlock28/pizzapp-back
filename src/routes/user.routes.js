const router = require('express').Router();
const { usersCtrl } = require('../controllers');

router.post("/signin", usersCtrl.signIn);

module.exports = router;