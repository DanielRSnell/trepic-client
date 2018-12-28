const Hotel = require("./data/hotels");
const axios = require("axios");
const express = require("express");

const mongoose = require("mongoose");

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
