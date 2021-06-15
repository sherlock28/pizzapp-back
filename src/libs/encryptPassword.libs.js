const bcrypt = require("bcryptjs");
const saltRounds = 10;
/**
 * This function encrypts the received password
 * @param {String} password User's password
 * @returns {String} Encrypted password 
 */
const encryptPassword = async password => {
  const salt = await bcrypt.genSaltSync(saltRounds);
  return await bcrypt.hash(password, salt);
};

module.exports = encryptPassword;
