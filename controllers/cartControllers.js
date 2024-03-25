const Cart = require("../models/cart");

// Controller to add an item to the cart
module.exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // checking if user has a card if not create new one
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // check if item is already in the cart and if -1 means its not found
    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId === productId
    );

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
    await cart.save();

    res.status(200).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(405).json({ error: "Error adding item to cart" });
  }
};

// Controller to update an item in the cart
module.exports.updateCartItem = async (req, res) => {};

// Controller to remove an item from the cart
module.exports.exports.removeFromCart = async (req, res) => {};

// Controller to get the cart contents
module.exports.exports.getCart = async (req, res) => {};
