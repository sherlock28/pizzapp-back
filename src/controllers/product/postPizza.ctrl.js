const { cloudinary } = require("../../config");
const { Product } = require("../../models");
const fs = require("fs-extra");

const postProduct = async (req, res) => {
  const { name, description, price, off, rating, reviewCount } = req.body;

  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    const newProduct = Project({
      name,
      description,
      price,
      off,
      rating,
      reviewCount,
      imageURL: result.secure_url,
      public_id: result.public_id,
    });

    const productSaved = await newProduct.save();

    await fs.unlink(req.file.path);

    res.status(201).json({
      status: "Ok",
      message: "Product successfully added",
      data: {
        product: productSaved,
      },
    });
  } catch (err) {
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = postProduct;
