let { phones } = require("../data/phones");

// get all phones
const getPhones = (req, res) => {
  res.status(200).json({ success: true, phone: phones });
};

// get phone by id
const getPhoneByID = (req, res) => {
  const { id } = req.params;
  const phonebyId = phones.mobiles.find((phone) => phone.id === Number(id));

  //   console.log(id);
  if (!phonebyId) {
    return res
      .status(400)
      .json({ success: false, message: `no id matching ${id}` });
  }
  res.status(200).json({ success: true, phone: phonebyId });
};

// update price for phones
const updatePhonePrice = (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  const phoneToUpdate = phones.mobiles.find((phone) => phone.id === Number(id));

  if (!phoneToUpdate) {
    return res
      .status(400)
      .json({ success: false, message: `no id matching ${id}` });
  }
  phoneToUpdate.price = price;

  res.status(200).json({ success: true, Phone: phoneToUpdate });
};

module.exports = { getPhones, getPhoneByID, updatePhonePrice };
