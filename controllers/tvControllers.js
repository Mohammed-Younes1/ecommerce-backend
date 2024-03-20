let { tv } = require("../data/tv");

// get all tv
const getTv = (req, res) => {
    res.status(200).json({ success: true, TV: tv });
};
// get tv by id
const getTvByID = (req, res) => {
    const { id } = req.params;
    const getTvbyId = tv.find((tvv) => tvv.id === Number(id));

    if (!getTvbyId) {
        return res
            .status(400)
            .json({ success: false, message: `no id matching ${id}` });
    }

    res.status(200).json({ success: true, TV: getTvbyId });
};

// update tv price
const updateTvPrice = (req, res) => {
    const { id } = req.params;
    const { price } = req.body;

    const tvToUpdate = tv.find((tvv) => tvv.id === Number(id));

    if (!tvToUpdate) {
        return res
            .status(400)
            .json({ success: false, message: `no id matching ${id}` });
    }
    // const newPrice = tv.map((tvs) => {
    //     if (tvs.id === Number(id)) {
    //         tvs.price = price;
    //     }
    // });
    tvToUpdate.price=price;

    res.status(200).json({ success: true, TV: tvToUpdate });
};

module.exports = { getTv, getTvByID, updateTvPrice };
