const { Product } = require("../../models");

const getProductById = async (req, res) => {
  try {
    const { id_product } = req.params;
    const product = await Product.findById(id_product);
    res.json({
      status: "Ok",
      message: "Product obtained",
      data: {
        product,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = getProductById;
