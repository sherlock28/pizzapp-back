const { User } = require("../../models");

const verifyMail = (req, res) => {
    const { email, hash } = req.query;
    res.send({ email, hash });
}

module.exports = verifyMail;