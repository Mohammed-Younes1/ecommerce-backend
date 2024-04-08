const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    trackingNumber: {
      type: String,
      required: true,
    },
    carrier: {
      type: String,
      required: true,
    },
    shippingCost: {
      type: Number,
      required: true,
    },
    shippingMethod: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Out for delivery", "Delivered", "Returned"],
      default: "Pending",
    },
    deliveryDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shipment", shipmentSchema);
