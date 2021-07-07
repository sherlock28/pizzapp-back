module.exports = {
  productCtrl: {
    getAllPizzas: require("./product/getAllPizzas.ctrl"),
    getPizzaById: require("./product/getPizzaById.ctrl"),
    postPizza: require("./product/postPizza.ctrl"),
    deleteProduct: require("./product/deletePizza.ctrl"),
    updateProduct: require("./product/updatePizza.ctrl"),
  },
  usersCtrl: {
    signUp: require("./user/signUp.ctrl"),
    signIn: require("./user/signIn.ctrl"),
    signOut: require("./user/signOut.ctrl"),
    verifyMail: require("./user/vefiryMail.ctrl"),
  },
};
