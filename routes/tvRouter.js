const express = require("express");
const router = express.Router();

const { getTv, getTvID } = require("../controllers/tvControllers");

router.route("/").get(getTv);
router.route("/:id").get(getTvID);

module.exports = router;
