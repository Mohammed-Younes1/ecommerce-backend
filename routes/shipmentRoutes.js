const express = require("express");
const shipmentControllers = require("../controllers/shipmentControllers");
const isAuthenticated = require("../middleware/userMiddleware");

const router = express.Router();

router.post("/shipment", isAuthenticated, shipmentControllers.createShipment);
router.get("/shipment", isAuthenticated, shipmentControllers.getAllShipments);
router.get("/shipment/:id", isAuthenticated, shipmentControllers.getShipmentById);

module.exports = router;
