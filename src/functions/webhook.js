const axios = require("axios");
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
const Hotel = mongoose.model("Hotel", hotelSchema);

exports.handler = function(event, context, callback) {
  mongoose.connect(
    "mongodb://dninja:Redskins1@ds159772.mlab.com:59772/trepic-admin"
  );

  Hotel.findOne({ name: "Samabe Bali Suites & Villas" })
    .limit(1)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      });
    })
    .catch(err => {
      console.log(err);
      callback(new Error("Something went wrong"));
    });
};
