const Shipment = require("../models/shipment");

// Create shipment
module.exports.createShipment = async (req, res) => {
  try {
    const shipment = await Shipment.create(req.body);
    res.status(201).json(shipment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get all shipments
module.exports.getAllShipments = async (req, res) => {
  try {
    const shipment = await Shipment.find();
    res.json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one shipment by id
module.exports.getShipmentById = async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    if (!shipment) {
      return res.status(404).json({ message: "Cannot find shipment" });
    }
    res.json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
