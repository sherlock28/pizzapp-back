const bcrypt = require("bcryptjs");
const saltRounds = 10;

const encryptPassword = async password => {
  const salt = await bcrypt.genSaltSync(saltRounds);
  return await bcrypt.hash(password, salt);
};

module.exports = encryptPassword;
