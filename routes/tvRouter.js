const express = require("express");
const router = express.Router();

const { getTv, getTvByID,updateTvPrice } = require("../controllers/tvControllers");

router.route("/").get(getTv);
router.route("/:id").get(getTvByID).put(updateTvPrice);

module.exports = router;
