const { Cart } = require("../models");

exports.getCartByUserId = async (id) => {
  const cart = await Cart.findOne({user: id}).populate({
    path: "items.productId",
    select: "name price total",
  });
  return cart;
};

exports.addItem = async (payload) => {
  const newItem = await Cart.create(payload);
  return newItem;
};

exports.removeItem = async id => {
  const cart = await Cart.findByIdAndRemove(id);
  return cart;
}
