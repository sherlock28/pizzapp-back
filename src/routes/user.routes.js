const router = require("express").Router();
const { usersCtrl } = require("../controllers");
const { users, auth } = require("../middlewares");

router.post("/signup", users.fieldUserValidation, usersCtrl.signUp);
router.post("/signin", usersCtrl.signIn);
router.post("/signout", auth.tokenValidation, usersCtrl.signOut);

router.get("/verify", usersCtrl.verifyMail);

module.exports = router;
