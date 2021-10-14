const { Cart } = require("../../models");
const { removeItem } = require("../../repository/cart.repo");

const removeItemFromCart = async (req, res) => {
  const { productId } = req.body;
};

module.exports = removeItemFromCart;