const { Product } = require("../models");

exports.products = async () => {
  const products = await Product.find().lean();
  return products;
};
exports.productById = (id) => {
  return Product.findById(id)
    .then((product) => {
      return product;
    })
    .catch((err) => {
      return null;
    });
};
exports.createProduct = async (payload) => {
  const newProduct = await Product.create(payload);
  return newProduct;
};
exports.updateProduct = async (id, payload) => {
  const productUpdated = await Product.findByIdAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true }
  );
  return productUpdated;
};
exports.removeProduct = async (id) => {
  const product = await Product.findByIdAndRemove(id);
  return product;
};

exports.getProductsOfCart = async (products) => {
  const productsIds = products.map((p) => p.id);
  const promises = productsIds.map((id) => {
    return Product.findById(id)
      .then((product) => product)
      .catch((err) => err);
  });
  return await Promise.all(promises);
};
