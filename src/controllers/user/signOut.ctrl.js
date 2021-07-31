const { User } = require("../../models");

const signOut = async (req, res) => {
  const authorization = req.header("Authorization");
  const token = authorization.split(" ")[1];
  const query = { token: token };

  const user = await User.findOne(query);

  if (user === null) {
    res.status(403).json({ status: "Error", message: "Invalid token" });
  } else {
    await User.findOneAndUpdate(query, { $unset: { token: 1 } });
    res.status(200).json({ status: "Ok", message: "Is logged out" });
  }
};

module.exports = signOut;
