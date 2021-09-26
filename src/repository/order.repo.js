const { Order } = require("../models");

exports.orders = async () => {
  const orders = await Order.find().populate({
    path: "items.productId",
    select: "name price total",
  });
  return orders;
};
exports.orderById = async (id) => {
  const order = await Order.findById(id);
  return order;
};
exports.createOrder = async (payload) => {
  const newOrder = await Order.create(payload);
  return newOrder;
};
exports.removeOrder = async (id) => {
  const order = await Order.findByIdAndRemove(id);
  return order;
};
