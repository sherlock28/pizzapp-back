const { Product } = require("../models");

exports.products = async () => {
  const products = await Product.find().lean();
  return products;
};
exports.productById = async (id) => {
  const product = await Product.findById(id);
  return product;
};
exports.createProduct = async (payload) => {
  const newProduct = await Product.create(payload);
  return newProduct;
};
exports.updateProduct = async (id, payload) => {
  const productUpdated = await Product.findByIdAndUpdate({ _id: id }, { $set: payload }, { new: true });
  return productUpdated;
};
exports.removeProduct = async (id) => {
  const product = await Product.findByIdAndRemove(id);
  return product;
};
