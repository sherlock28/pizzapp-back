const { Order } = require("../../models");

const postOrder = async (req, res) => {
  const { user_id, products } = req.body;

  const newOrder = Order({
    user: user_id,
    products,
  });

  try {
    const orderSaved = await newOrder.save();

    res.json({
      status: "Ok",
      message: "Product successfully added",
      data: {
        order: orderSaved,
      },
    });
  } catch (err) {
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = postOrder;
