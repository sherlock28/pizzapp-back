const generateHash = ({ fullname, username, email }) => {
    const hash = require("crypto")
        .createHash("sha256")
        .update(`${fullname}+${username}+${email}`)
        .digest("hex");

    return hash;
}

module.exports = generateHash;