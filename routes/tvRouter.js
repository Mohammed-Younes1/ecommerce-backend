const express = require("express");
const router = express.Router();

const { getTv, getTvID,UpdateTvPrice } = require("../controllers/tvControllers");

router.route("/").get(getTv);
router.route("/:id").get(getTvID).put(UpdateTvPrice);

module.exports = router;
