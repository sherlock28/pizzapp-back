const router = require("express").Router();
const { usersCtrl } = require("../controllers");
const { users } = require("../middlewares");

router.post("/signup", users.fieldUserValidation, usersCtrl.signUp);
router.post("/signin", usersCtrl.signIn);
router.post("/signout", users.tokenValidation, usersCtrl.signOut);

module.exports = router;
