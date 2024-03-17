import TypeModel from "../models/Type.js";

export const getAll = async (req, res) => {
  try {
    const types = await TypeModel.find().exec();
    res.json(types);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to get types",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const typeId = req.params.id;
    const type = await TypeModel.findOne({
      _id: typeId,
    });
    res.json(type);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to find type",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new TypeModel({
      name: req.body.name,
    });

    const type = await doc.save();

    res.json(type);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to create type",
    });
  }
};