module.exports = {
  auth: {
    tokenValidation: require("./auth/tokenValidation.mdw"),
  },
  users: {
    fieldUserValidation: require("./users/fieldUserValidation.mdw"),
  },
};
