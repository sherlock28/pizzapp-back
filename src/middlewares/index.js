module.exports = {
  auth: {
    tokenValidation: require("./auth/tokenValidation.mdw"),
    fieldUserValidation: require("./auth/fieldUserValidation.mdw"),
  },
};
