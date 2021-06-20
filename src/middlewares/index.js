module.exports = {
  auth: {
    tokenValidation: require("./auth/tokenValidation.mdw"),
  },
  users: {
    fieldUserValidation: require("./users/fieldUserValidation.mdw"),
  },
  errors: {
    handleError: require("./errors/handleErrors.mdw"),
    notFound: require("./errors/notFound404.mdw"),
  }
};
