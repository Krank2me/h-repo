const mongoose = require("mongoose");

const BuildingsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  postal: {
    type: String,
    required: true,
    trim: true,
  },
  plans: [
    {
      monthsFree: Number,
      label: String,
      price: Number,
    },
  ],
});

module.exports = mongoose.model("buildings", BuildingsSchema);
