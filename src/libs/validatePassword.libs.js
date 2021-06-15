const bcrypt = require("bcryptjs");

/**
 * This function verifies that the passwords match
 * @param {String} passwordFromRequest Password received in the request
 * @param {String} passwordFromDB Password stored in the database 
 * @returns {Boolean} Returns true if the passwords match. Returns false if the passwords do not match
 */
const validatePassword = async (passwordFromRequest, passwordFromDB) => {
  try {
    return await bcrypt.compare(passwordFromRequest, passwordFromDB);
  } catch (err) {
    console.error(err);
  }
};

module.exports = validatePassword;
