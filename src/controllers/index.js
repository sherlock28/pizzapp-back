module.exports = {
  productCtrl: {
    getAllPizzas: require("./product/getAllPizzas.ctrl"),
  },
  usersCtrl: {
    signUp: require("./users/signUp.ctrl"),
    signIn: require("./users/signIn.ctrl"),
    signOut: require("./users/signOut.ctrl"),
  },
};
