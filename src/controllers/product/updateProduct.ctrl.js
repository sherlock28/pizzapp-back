const { cloudinary } = require("../../config");
const productRepository = require("../../repository/product.repo");
const fs = require("fs-extra");
const status = require("../../const/statusCode");

const updateProduct = async (req, res) => {
  try {
    const { id_product } = req.params;
    const { name, description, price, off, rating, reviewCount } = req.body;

    const product = await productRepository.productById(id_product);

    const deleteResult = await cloudinary.uploader.destroy(product.public_id, {
      folder: process.env.CLOUDINARY_FOLDER,
    });

    const imageSaved = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
      folder: process.env.CLOUDINARY_FOLDER,
      overwrite: true,
    });

    const payload = {
      name,
      description,
      price,
      off,
      rating,
      reviewCount,
      imageURL: imageSaved.secure_url,
      public_id: imageSaved.public_id,
    };

    const productUpdated = await productRepository.updateProduct(
      id_product,
      payload
    );

    await fs.unlink(req.file.path);

    res.status(status.OK).json({
      status: "Ok",
      message: "Updated product",
      data: {
        productUpdated,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(status.INTERNAL_SERVER_ERROR).json({ status: "Error", message: "Product could not be updated" });
  }
};

module.exports = updateProduct;
