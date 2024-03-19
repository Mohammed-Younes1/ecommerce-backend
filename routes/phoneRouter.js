const express = require("express");
const router = express.Router();

const { getPhones, getPhoneID } = require("../controllers/phoneController");

router.route("/").get(getPhones);
router.route("/:id").get(getPhoneID);

module.exports = router;
