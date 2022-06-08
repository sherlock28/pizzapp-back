const { cloudinary } = require("../../config");
const productRepository = require("../../repository/product.repo");
const status = require("../../const/statusCode");

const deleteProduct = async (req, res) => {
  try {
    const { id_product } = req.params;

    const product = await productRepository.removeProduct(id_product);

    const result = await cloudinary.uploader.destroy(product.public_id, {
      folder: process.env.CLOUDINARY_FOLDER,
    });

    res.status(status.OK).json({ status: "Ok", message: "Product successfully deleted" });
  } catch (err) {
    console.error(err);
    res.status(status.INTERNAL_SERVER_ERROR).json({ status: "Error", message: "Product could not be removed" });
  }
};

module.exports = deleteProduct;
