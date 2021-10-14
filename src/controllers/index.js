module.exports = {
  productCtrl: {
    getAllProduct: require("./product/getAllProduct.ctrl"),
    getProductById: require("./product/getProductById.ctrl"),
    postProduct: require("./product/postProduct.ctrl"),
    deleteProduct: require("./product/deleteProduct.ctrl"),
    updateProduct: require("./product/updateProduct.ctrl"),
  },
  usersCtrl: {
    signUp: require("./user/signUp.ctrl"),
    signIn: require("./user/signIn.ctrl"),
    signOut: require("./user/signOut.ctrl"),
    verifyMail: require("./user/vefiryMail.ctrl"),
  },
  cartCtrl: {
    getCartByUserId: require("./cart/getCartByUserId.ctrl"),
    addItemToCart: require("./cart/addItemToCart.ctrl"),
    removeItemFromCart: require("./cart/removeItemFromCart.ctrl"),
  },
};
