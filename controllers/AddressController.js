import AddressModel from "../models/Address.js";

export const getAll = async (req, res) => {
  try {
    const addresses = await AddressModel.find().exec();
    res.json(addresses);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to get addresses",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const addressId = req.params.id;
    const address = await AddressModel.findOne({
      _id: addressId,
    });
    res.json(address);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to find address",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new AddressModel({
      city: req.body.city,
      street: req.body.street,
      longitude: req.body.longitude,
	    latitude: req.body.latitude,
    });

    const address = await doc.save();

    res.json(address);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to create address",
    });
  }
};