const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const hotelSchema = new Schema({
  zumataid: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  postalcode: { type: String },
  stateprovince: { type: String },
  countryCode: { type: String },
  latitude: { type: String },
  longitude: { type: String },
  faxnumber: { type: String },
  website: { type: String },
  rating: { type: Number },
  rank: { type: Number }
});

module.exports = mongoose.model("Hotel", hotelSchema);
