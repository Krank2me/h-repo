const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  apartment: {
    type: Number,
    trim: true,
  },
  plan: [
    {
      monthsFree: Number,
      label: String,
      price: String,
    },
  ],
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
