const { User } = require("../../models");
const { encryptPassword, generateHash, createMailToVerifyAccount } = require("../../libs");
const { transporter } = require("../../config");
const status = require("../../const/statusCode");

const signUp = async (req, res) => {
  const { fullname, username, email, password } = req.body;

  const hash = generateHash({ fullname, username, email });

  const newUser = new User({
    fullname,
    username,
    email,
    phone: req.body.phone || "",
    password,
    tokenConfirmMail: hash
  });

  const user = await User.findOne({ email: email }).lean();

  if (user === null) {
    newUser.password = await encryptPassword(newUser.password);
    const savedUser = await newUser.save();

    const html = createMailToVerifyAccount({ fullname, email, hash });

    await transporter.sendMail({
      from: '"Pizzapp" <caceresrodolfo28@gmail.com>',
      to: email,
      subject: "Signup | Verification ✔",
      html,
    });

    res.status(status.CREATED).json({
      status: "Ok",
      message: "Registered",
      user: savedUser,
    });
  } else {
    res.status(status.BAD_REQUEST).json({
      status: "Error",
      message: "The email is already in use",
    });
  }
};

module.exports = signUp;
