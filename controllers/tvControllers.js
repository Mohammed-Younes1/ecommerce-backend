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
const UpdateTvPrice = (req, res) => {
    const { id } = req.params;
    const { price } = req.body;

    const getTvbyId = tv.find((tvv) => tvv.id === Number(id));

    if (!getTvbyId) {
        return res
            .status(400)
            .json({ success: false, message: `no id matching ${id}` });
    }
    const newPrice = tv.map((tvs) => {
        if (tvs.id === Number(id)) {
            tvs.price = price;
        }
    });

    res.status(200).json({ success: true, TV: newPrice });
};

module.exports = { getTv, getTvID, UpdateTvPrice };
