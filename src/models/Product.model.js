const { model, Schema } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: { type: String, required: [true, "Please Include the product name"] },
    description: {
      type: String,
      required: [true, "Please Include the product description"],
    },
    price: {
      type: Number,
      required: [true, "Please Include the product price"],
    },
    off: { type: Number, default: 0 },
    rating: Number,
    reviewCount: { type: Number, default: 0 },
    imageURL: { type: String, required: true },
    public_id: { type: String, required: true },
  },
  {
    toJSON: {
      transform: function (document, returnedObject) {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
      },
    },
  }
);

module.exports = model("Product", ProductSchema);
