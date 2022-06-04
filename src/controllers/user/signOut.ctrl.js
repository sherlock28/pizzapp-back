const { User } = require("../../models");
const status = require("../../const/statusCode");

const signOut = async (req, res) => {
  const authorization = req.header("Authorization");
  const token = authorization.split(" ")[1];
  const query = { token: token };

  const user = await User.findOne(query);

  if (user === null) {
    res.status(status.FORBIDDEN).json({ status: "Error", message: "Invalid token" });
  } else {
    await User.findOneAndUpdate(query, { $unset: { token: 1 } });
    res.status(status.OK).json({ status: "Ok", message: "Is logged out" });
  }
};

module.exports = signOut;
