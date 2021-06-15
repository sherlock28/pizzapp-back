const { User } = require("../../models");

const verifyMail = async (req, res) => {
    const { email, hash } = req.query;

    const user = await User.find({ $and: [{ tokenConfirmMail: hash }, { email: email }] }).lean();

    if (user === null) {
        res.status(400).send("<h4>Invalid URL</h4>");
    } else {
        const { _id } = user[0];

        await User.updateOne({ _id: _id }, {
            $set: {
                isMailConfirmed: true,
            },
        },
            { new: true }
        );
        
        res.status(200).send("<h4>Your account is verified</h4>");
    }
}

module.exports = verifyMail;