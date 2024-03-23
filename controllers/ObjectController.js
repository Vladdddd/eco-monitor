import ObjectModel from "../models/Object.js";
import Address from "../models/Address.js";

export const getAll = async (req, res) => {
  try {
    const objects = await ObjectModel.find().exec();
    res.json(objects);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to get objects",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const objectId = req.params.id;
    const object = await ObjectModel.findOne({
      _id: objectId,
    });
    res.json(object);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to find object",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new ObjectModel({
      name: req.body.name,
	    address: req.body.addressId
    });

    const object = await doc.save();
	  const addressById = await Address.findById(req.body.addressId);
    
	  addressById.objects.push(object);
    await addressById.save();
	
    const objects = await ObjectModel.find({ address: req.body.addressId }).exec();
    res.json(objects);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to create object",
    });
  }
};

// export const getAllObjectsForAddress = async (req, res) => {
//   const addressId = req.params.id;

//   try {
//     const objects = await ObjectModel.find({ address: addressId });
//     res.json(objects);
// } catch (error) {
//     console.error('Error getting objects for address:', error);
//     res.status(500).json({ message: 'Server error' });
// }
// };