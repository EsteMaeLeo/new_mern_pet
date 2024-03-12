import mongoose from "mongoose";

const veterinarian = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
});
