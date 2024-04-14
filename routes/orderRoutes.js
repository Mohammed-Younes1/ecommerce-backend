const express = require("express");
const orderControllers = require("../controllers/orderControllers");
const router = express.Router();
const isAuthenticated = require("../middleware/userMiddleware");

router.post("/orders", orderControllers.createOrder);
router.get("/orders", isAuthenticated, orderControllers.getAllOrders);
router.get("/orders/:id", isAuthenticated, orderControllers.getOrderById);
router.delete("/orders/:id", isAuthenticated, orderControllers.deleteOrder);

module.exports = router;
