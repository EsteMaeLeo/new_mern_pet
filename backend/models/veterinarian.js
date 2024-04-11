import mongoose from "mongoose";
import generateid from "../helpers/generateid.js";

const veterinarianShema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    default: null,
    trim: true,
  },
  web: {
    type: String,
    default: null,
  },
  token: {
    type: String,
    default: generateid,
  },
  confirm: {
    type: String,
    default: false,
  },
});

const veterinarian = mongoose.model("veterinarian", veterinarianShema);

export default veterinarian;
