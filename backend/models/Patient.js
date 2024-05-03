import mongoose from "mongoose";
import veterinarian from "./veterinarian";

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
