const { cloudinary } = require("../../config");
const productRepository = require("../../repository/product.repo");
const fs = require("fs-extra");
const status = require("../../const/statusCode");

const postProduct = async (req, res) => {
  const { name, description, price, rating, reviewCount } = req.body;

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
      folder: process.env.CLOUDINARY_FOLDER,
      overwrite: true,
    });

    const payload = {
      name,
      description,
      price,
      off: req.body.off || "",
      rating,
      reviewCount,
      imageURL: result.secure_url,
      public_id: result.public_id,
    };

    const productSaved = await productRepository.createProduct(payload);

    await fs.unlink(req.file.path);

    res.status(status.CREATED).json({
      status: "Ok",
      message: "Product successfully added",
      data: {
        product: productSaved,
      },
    });
  } catch (err) {
    res
      .status(status.INTERNAL_SERVER_ERROR)
      .json({ status: "Error", message: "Product could not be created" });
  }
};

module.exports = postProduct;
