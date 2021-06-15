/**
 * This function generates the content of the mail that will be sent to the user
 * @param {String} fullname User's fullname
 * @param {String} email User's email
 * @param {String} hash User's hash to verify his email
 * @returns {String} String with the email content
 */
const createMailToVerifyAccount = ({ fullname, email, hash }) => {
    const htmlMail = `<b>Hello ${fullname}</b>, 
    <p>Thanks for signing up in Pizzapp!
    Your account has been created, you have activated your account by pressing the url below.</p>
    <br/>
    <p>Please click this link to activate your account:</p>
    <a href="http://localhost:4000/api/v1/verify?email=${email}&hash=${hash}">Click here </a>`;

    return htmlMail;
}

module.exports = createMailToVerifyAccount;