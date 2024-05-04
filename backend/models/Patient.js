import mongoose from "mongoose";
import veterinarian from "./veterinarian.js";

const patientShema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    owner: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    registerDate: {
      type: Date,
      require: true,
      default: Date.now(),
    },
    symptoms: {
      type: String,
      require: true,
    },
    doc: {
      type: mongoose.Schema.ObjectId,
      ref: "veterinarian",
    },
  },
  {
    timestemps: true,
  }
);
const Patient = mongoose.model("Patient", patientShema);

export default Patient;
