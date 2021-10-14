const cartRepository = require("../../repository/cart.repo");

const getCartByUserId = async (req, res) => {
  const { id_user } = req.params;
  try {
    const cart = await cartRepository.getCartByUserId(id_user);
    if (!cart) {
      return res.status(404).json({
        status: "Error",
        message: "Invalid request: cart not found",
      });
    }
    res.status(200).json({
      status: "Ok",
      data: cart,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Error",
      message: "Something went wrong",
    });
  }
};

module.exports = getCartByUserId;
