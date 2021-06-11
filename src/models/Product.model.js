const { model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  off: Number,
  rating: Number,
  reviewCount: Number,
  imageURL: String,
  public_id: String,
});

module.exports = model("Product", ProductSchema);
