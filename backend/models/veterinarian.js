import mongoose from "mongoose";
import bcrypt from "bcrypt";
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

veterinarianShema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

veterinarianShema.methods.checkPassword = async function (passwordForm) {
  return await bcrypt.compare(passwordForm, this.password);
};

const veterinarian = mongoose.model("veterinarian", veterinarianShema);

export default veterinarian;
