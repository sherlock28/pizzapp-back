const productRepository = require("../../repository/product.repo");
const status = require("../../const/statusCode");

const getAllProducts = async (req, res) => {
  try {
    const products = await productRepository.products();
    res.status(status.OK).json({
      status: "Ok",
      message: "List of all products",
      data: {
        products,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(status.INTERNAL_SERVER_ERROR).json({ status: "Error", message: "Could not get the products" });
  }
};

module.exports = getAllProducts;
