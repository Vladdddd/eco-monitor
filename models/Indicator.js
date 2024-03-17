import mongoose from "mongoose";

const IndicatorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
	unit: {
      type: String,
      required: true,
    },
	type: {
      type: mongoose.Schema.Types.ObjectId,
	  ref: "Type",
      required: true,
    },
	object: {
      type: mongoose.Schema.Types.ObjectId,
	  ref: "Object",
      required: true,
    },
	values: [
		{
      value: {
			  type: String
		  },
		  date: {
			  type: Date
		  }
    }
  ]
  },
);

export default mongoose.model("Indicator", IndicatorSchema);
