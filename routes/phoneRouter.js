const express = require("express");
const router = express.Router();

const {
  getPhones,
  getPhoneByID,
  updatePhonePrice,
} = require("../controllers/phoneController");

router.route("/").get(getPhones);
router.route("/:id").get(getPhoneByID).put(updatePhonePrice);

module.exports = router;
