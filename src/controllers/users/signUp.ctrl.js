const { User } = require("../../models");
const { encryptPassword } = require("../../libs");
const transporter = require("../../config/mailer");

const signUp = async (req, res) => {
  const { fullname, username, email, password } = req.body;

  const hash = require("crypto")
    .createHash("sha256")
    .update(`${fullname}+${username}+${email}`)
    .digest("hex");


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

    const html = `<b>Hello ${fullname}</b>, 
    <p>Thanks for signing up in Pizzapp!
    Your account has been created, you have activated your account by pressing the url below.</p>
    <br/>
    <p>Please click this link to activate your account:</p>
    <a href="http://localhost:4000/api/v1/verify?email=${email}&hash=${hash}">Click here </a>`;

    await transporter.sendMail({
      from: '"Registered" <caceresrodolfo28@gmail.com>',
      to: email,
      subject: "Signup | Verification ✔",
      html,
    });


    res.status(201).json({
      status: "Ok",
      message: "Registered",
      user: savedUser,
    });
  } else {
    res.status(400).json({
      status: "Error",
      message: "The email is already in use",
    });
  }
};

module.exports = signUp;
