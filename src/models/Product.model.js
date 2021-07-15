const { model, Schema } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    off: Number,
    rating: Number,
    reviewCount: Number,
    imageURL: String,
    public_id: String,
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
