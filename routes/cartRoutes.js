const express = require("express");
const cartControllers = require("../controllers/cartControllers");
const isAuthenticated = require("../middleware/userMiddleware");

const router = express.Router();

router.post("/add", isAuthenticated, cartControllers.addToCart);
router.put("/update/:itemId", isAuthenticated, cartControllers.updateCartItem);
router.delete("/delete/:itemId", isAuthenticated, cartControllers.removeFromCart);
router.get("/", isAuthenticated, cartControllers.getCart);

module.exports = router;
