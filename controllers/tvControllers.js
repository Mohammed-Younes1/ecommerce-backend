let { tv } = require("../data/tv");

// get all tv
const getTv = (req, res) => {
  res.status(200).json({ success: true, TV: tv });
};
// get tv by id
const getTvID = (req, res) => {
  const { id } = req.params;
  const getTvbyId = tv.find((tvv) => tvv.id === Number(id));

  if (!getTvbyId) {
    return res
      .status(400)
      .json({ success: false, message: `no id matching ${id}` });
  }

  res.status(200).json({ success: true, TV: getTvbyId });
};

module.exports = { getTv, getTvID };
