const express = require("express");
const router = express.Router();

router.post("/add", cartController.addToCart);
router.put("/update/:itemId",cartController.updateCartItem);
router.delete("/delete/:itemId",cartController.removeFromCart)
router.get("/", cartController.getCart);

module.exports = router;
