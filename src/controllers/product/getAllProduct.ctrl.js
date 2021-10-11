const productRepository = require("../../repository/product.repo");

const getAllProducts = async (req, res) => {
  try {
    const products = await productRepository.products();
    res.status(200).json({
      status: "Ok",
      message: "List of all products",
      data: {
        products,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: "Could not get the products" });
  }
};

module.exports = getAllProducts;
