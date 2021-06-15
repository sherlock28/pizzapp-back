/**
 * This function generate a hash
 * @param {String} fullname User's name
 * @param {String} username User's username
 * @param {String} email User's email
 * @returns {String} Returns a hash
 */
const generateHash = ({ fullname, username, email }) => {
    const hash = require("crypto")
        .createHash("sha256")
        .update(`${fullname}+${username}+${email}`)
        .digest("hex");

    return hash;
}

module.exports = generateHash;