module.exports = {
  users: {
    tokenValidation: require("./auth/tokenValidation.mdw"),
    fieldUserValidation: require("./auth/fieldUserValidation.mdw"),
  },
};
