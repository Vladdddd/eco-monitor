import IndicatorModel from "../models/Indicator.js";
import Object from "../models/Object.js";

export const getAll = async (req, res) => {
  try {
    const indicators = await IndicatorModel.find().exec();
    res.json(indicators);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to get indicators",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const indicatorId = req.params.id;
    const indicator = await IndicatorModel.findOne({
      _id: indicatorId,
    });
    res.json(indicator);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to find indicator",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new IndicatorModel({
      name: req.body.name,
      unit: req.body.unit,
      type: req.body.typeId,
	    object: req.body.objectId
    });

    const indicator = await doc.save();
	
	  const objectById = await Object.findById(req.body.objectId);
	  objectById.indicators.push(indicator);
    await objectById.save();

    res.json(indicator);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to create indicator",
    });
  }
};

export const update = async (req, res) => {
  try {
    const indId = req.params.id;

    await IndicatorModel.updateOne(
      {
        _id: indId,
      },
      {
        name: req.body.name,
        unit: req.body.unit,
        type: req.body.typeId,
        object: req.body.objectId,
        values: req.body.values
      }
    );

    const indicator = await IndicatorModel.find().exec();
    res.json(indicator);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to update indicator",
    });
  }
};