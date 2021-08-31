const { Cart } = require("../../models");

const postOrder = async (req, res) => {
  const { user_id, product } = req.body;

  const newItem = Cart({
    user: user_id,
    product,
  });

  const userCart = await Cart.findOne({ user: user_id });

  if(userCart === null) {

  }

  try {
    const orderSaved = await newItem.save();

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