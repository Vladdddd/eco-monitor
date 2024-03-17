import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
	street: {
      type: String,
      required: true,
    },
	longitude: {
      type: String,
      required: true,
    },
	latitude: {
      type: String,
      required: true,
    },
	objects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Object",
        required: false,
      },
	],
  },
);

export default mongoose.model("Address", AddressSchema);
