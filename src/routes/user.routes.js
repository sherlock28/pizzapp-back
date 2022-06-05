const router = require("express").Router();
const { usersCtrl } = require("../controllers");
const { users, auth } = require("../middlewares");

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              fullname:
 *                  type: string
 *                  description: Full name of the user
 *              email:
 *                  type: string
 *                  description: Email of the user
 *              phone:
 *                  type: string
 *                  description: Phone number of the user
 *              password:
 *                  type: string
 *                  description: Password of the user
 *              confirmpass:
 *                  type: string
 *                  description: Confirm password of the user
 *
 *          required:
 *              - fullname
 *              - username
 *              - email
 *              - password
 *              - confirmpass
 *          example:
 *              fullname: John Doe
 *              username: johndoe
 *              email: johndoe@email.com
 *              password: adminadmin123
 *              confirmpass: adminadmin123
 */

/**
 * @swagger
 * /api/v1/signup:
 *  post:
 *    summary: Create a new user
 *    description: Sign up a new user
 *    tags:
 *     - User
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *    responses:
 *     200:
 *      description: User created successfully
 */
router.post("/signup", users.fieldUserValidation, usersCtrl.signUp);
router.post("/signin", usersCtrl.signIn);
router.post("/signout", auth.tokenValidation, usersCtrl.signOut);

router.get("/verify", usersCtrl.verifyMail);

module.exports = router;
