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