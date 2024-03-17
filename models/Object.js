import mongoose from "mongoose";

const ObjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
	address: {
      type: mongoose.Schema.Types.ObjectId,
	    ref: "Address",
      required: true,
    },
	indicators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Indicator",
        required: false,
      },
	],
  },
);

export default mongoose.model("Object", ObjectSchema);
