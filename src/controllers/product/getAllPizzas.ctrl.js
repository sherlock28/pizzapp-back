const { Product } = require("../../models");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().lean();
    res.status(200).json({
      status: "Ok",
      message: "List of all products",
      data: {
        products,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = getAllProducts;
