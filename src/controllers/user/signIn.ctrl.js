const { User } = require("../../models");
const { validatePassword } = require("../../libs");
const jwt = require("jsonwebtoken");
const status = require("../../const/statusCode");

const signIn = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user === null) {
    res.status(status.FORBIDDEN).json({
      status: "Error",
      message: "Invalid credentials",
    });
  } else {
    const isCorrectPass = await validatePassword(
      req.body.password,
      user.password
    );

    if (isCorrectPass) {
      const token = await jwt.sign(
        {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: process.env.EXPIRES_IN ?? 86000 }
      );

      const query = { email: user.email };
      await User.findOneAndUpdate(query, { token: token });

      res
        .status(status.ACCEPTED)
        .header({
          Authorization: token,
          "Access-Control-Expose-Headers": "Authorization",
        })
        .json({
          status: "Ok",
          message: "You are logged in",
          token,
          user
        });
    } else {
      res.status(status.FORBIDDEN).json({
        status: "Error",
        message: "Invalid credentials",
      });
    }
  }
};

module.exports = signIn;
