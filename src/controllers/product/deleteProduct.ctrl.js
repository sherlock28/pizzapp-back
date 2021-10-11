const { cloudinary } = require("../../config");
const productRepository = require("../../repository/product.repo");

const deleteProduct = async (req, res) => {
  try {
    const { id_product } = req.params;

    const product = await productRepository.removeProduct(id_product);

    const result = await cloudinary.uploader.destroy(product.public_id, {
      folder: process.env.CLOUDINARY_FOLDER,
    });

    res.json({ status: "Ok", message: "Product successfully deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: "Product could not be removed" });
  }
};

module.exports = deleteProduct;
