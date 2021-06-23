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
}, {
  toJSON: {
    transform: function (document, returnedObject) {
      returnedObject.id = returnedObject._id;
      delete returnedObject._id;
      delete returnedObject.__v;
      delete returnedObject.password;
    }
  }
});

module.exports = model("User", UserSchema);
