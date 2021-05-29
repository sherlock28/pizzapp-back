module.exports = {
  productCtrl: {
    getAllPizzas: require("./product/getAllPizzas.ctrl"),
    postPizza: require("./product/postPizza.ctrl"),
    deleteProduct: require("./product/deletePizza.ctrl"),
  },
  usersCtrl: {
    signUp: require("./users/signUp.ctrl"),
    signIn: require("./users/signIn.ctrl"),
    signOut: require("./users/signOut.ctrl"),
  },
};
