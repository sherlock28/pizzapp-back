const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        count: { type: Number, default: 1 },
      },
    ],
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

module.exports = model("Cart", CartSchema);