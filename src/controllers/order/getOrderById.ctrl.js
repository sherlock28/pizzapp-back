const { Order } = require("../../models");

const getOrdersById = async (req, res) => {
  const { orderId } = req.body;

  try {
    const order = await Order.find({ _id: orderId }).populate("products", {
      name: 1,
      price: 1,
      imageURL: 1,
      public_id: 1,
    });

    res.json({
      status: "Ok",
      message: "Order found successfully",
      data: {
        order,
      },
    });
  } catch (err) {
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = getOrdersById;
