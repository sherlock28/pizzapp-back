const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  fullname: String,
  username: String,
  email: String,
  phone: String,
  password: String,
  token: String,
  isMailConfirmed: { type: Boolean, default: false },
  tokenConfirmMail: String
});

module.exports = model("User", UserSchema);
