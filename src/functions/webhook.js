const axios = require("axios");
const mongoose = require("mongoose");
const Hotel = require(".data/hotels");

mongoose.connect(
  `mongodb://${
    process.env.REACT_APP_MONGOOSE
  }@ds159772.mlab.com:59772/trepic-admin`
);

exports.handler = function(event, context, callback) {
  const query = event.queryStringParameters;
  return Hotel.findOne({ name: "Samabe Bali Suites & Villas" }).then(res =>
    JSON.stringify(res)
  );
};
