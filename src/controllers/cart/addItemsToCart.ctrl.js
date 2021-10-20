const cartRepository = require("../../repository/cart.repo");
const productRepository = require("../../repository/product.repo");

const addItemsToCart = async (req, res) => {
  const { products: productsStr, id_user } = req.body;
  const products = JSON.parse(productsStr);
  try {
    const cart = await cartRepository.getCartByUserId(id_user);
    const productsDetails = await productRepository.getProductsOfCart(products);

    if (!productsDetails) {
      return res.status(404).json({
        status: "Error",
        message: "Invalid request: product not found",
      });
    }

    if (cart) {
      // const indexFound = cart.items.findIndex(
      //   (item) => item.productId.id == productId
      // );
      // console.log({ indexFound });
      res.status(200).json({ productsDetails });
      /**-------------------------------- */
    } else {
      const items = products.map((p) => {
        const productDetail = productsDetails.find((pd) => pd._id == p.id);
        const item = {
          productId: p.id,
          quantity: p.quantity,
          subtotal: parseFloat(productDetail.price * p.quantity).toFixed(2),
          price: productDetail.price,
        };
        return item;
      });

      const total = items
        .map((item) => item.subtotal)
        .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

      const cartData = {
        user: id_user,
        items,
        total
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

module.exports = addItemsToCart;
