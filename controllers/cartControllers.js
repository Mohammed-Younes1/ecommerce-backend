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
module.exports.updateCartItem = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const { quantity } = req.params;

    //check if there is a cart for the user
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const itemToUpdate = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (!itemToUpdate) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    itemToUpdate.quantity = quantity;

    await cart.save();
    res.status(200).json({ message: "Cart item updated successfully" });
  } catch (error) {
    console.error("Error Updating items in the cart:", error);
  }
};

// Controller to remove an item from the cart
module.exports.exports.removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    // Remove the item with the matching productId
    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();
    res.status(200).json({ message: "Cart item updated successfully" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(406).json({ error: "Error removing item from cart" });
  }
};

// Controller to get the cart contents
module.exports.exports.getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    let cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error getting cart contents:", error);
    res.status(500).json({ error: "Error getting cart contents" });
  }
};
