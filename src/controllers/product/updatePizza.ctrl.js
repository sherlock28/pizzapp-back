const { cloudinary } = require("../../config");
const { Product } = require("../../models");
const fs = require("fs-extra");

const updateProduct = async (req, res) => {
  try {
    const { id_product } = req.params;
    const { name, description, price } = req.body;

    const product = await Product.findById(id_product);

    const deleteResult = await cloudinary.uploader.destroy(product.public_id);

    const imageSaved = await cloudinary.uploader.upload(req.file.path);

    const productUpdated = await Project.findByIdAndUpdate(
      { _id: id_product },
      {
        $set: {
          name,
          description,
          price,
          imageURL: imageSaved.secure_url,
          public_id: imageSaved.public_id,
        },
      },
      { new: true }
    );

    await fs.unlink(req.file.path);

    res.json({
      status: "Ok",
      message: "Updated product",
      data: {
        productUpdated,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = updateProduct;
