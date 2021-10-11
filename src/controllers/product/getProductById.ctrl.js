const productRepository = require("../../repository/product.repo");

const getProductById = async (req, res, next) => {
  try {
    const { id_product } = req.params;
    const product = await productRepository.productById(id_product);

    if (product) {
      res.json({
        status: "Ok",
        message: "Product obtained",
        data: {
          product,
        },
      });
    } else {
      res.status(404).json({
        status: "Error",
        message: "Product not found",
      });
    }

  } catch (err) {
    next(err);
  }
};

module.exports = getProductById;
