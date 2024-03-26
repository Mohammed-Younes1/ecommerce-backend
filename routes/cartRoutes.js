const express = require("express");
const cartControllers=require('../controllers/cartControllers')
const router = express.Router();

router.post("/add", cartControllers.addToCart);
router.put("/update/:itemId",cartControllers.updateCartItem);
router.delete("/delete/:itemId",cartControllers.removeFromCart)
router.get("/", cartControllers.getCart);

module.exports = router;
