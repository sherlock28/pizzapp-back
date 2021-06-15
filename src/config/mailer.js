const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.GOOGLE_MAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
    },
});

// transporter.verify().then(() => console.log("Ready for send emails"));