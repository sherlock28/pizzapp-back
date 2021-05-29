const bcrypt = require("bcryptjs");

const validatePassword = async (passwordFromRequest, passwordFromDB) => {
  try {
    return await bcrypt.compare(passwordFromRequest, passwordFromDB);
  } catch (err) {
    console.error(err);
  }
};

module.exports = validatePassword;
