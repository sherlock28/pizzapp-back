const cartRepository = require("../../repository/cart.repo");
const productRepository = require("../../repository/product.repo");

const addItemToCart = async (req, res) => {
  const { id_product, id_user } = req.body;
  const quantity = Number.parseInt(req.body.quantity);

  try {
    const cart = await cartRepository.getCartByUserId(id_user);
    const productDetails = await productRepository.productById(id_product);

    if (!productDetails) {
      return res.status(404).json({
        status: "Error",
        message: "Invalid request: product not found",
      });
    }

    if (cart) {
      const indexFound = cart.items.findIndex(
        (item) => item.productId.id == productId
      );
      console.log({ indexFound });
      /**-------------------------------- */
    } else {
      const cartData = {
        user: id_user,
        items: [
          {
            productId: id_product,
            quantity: quantity,
            total: parseFloat(productDetails.price * quantity).toFixed(2),
            price: productDetails.price,
          },
        ],
        subTotal: parseFloat(productDetails.price * quantity).toFixed(2),
      };
      const cartSaved = await cartRepository.addItem(cartData);
      res.status(200).json({
        message: "Product successfully added to cart",
        data: cartSaved,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Something went wrong",
      err: err,
    });
  }
};

module.exports = addItemToCart;
