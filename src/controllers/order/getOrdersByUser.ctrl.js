const { Order } = require("../../models");

const getOrdersByUser = async (req, res) => {
  const { userId } = req.body;

  try {
    const orders = await Order.find({ user: userId }).populate("products", {
      name: 1,
      price: 1,
      imageURL: 1,
      public_id: 1,
    });

    res.json({
      status: "Ok",
      message: "Order list",
      data: {
        orders,
      },
    });
  } catch (err) {
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = getOrdersByUser;
