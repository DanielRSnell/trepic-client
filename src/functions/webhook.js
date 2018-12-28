const Hotel = require("./data/hotels");
const axios = require("axios");
const express = require("express");

const mongoose = require("mongoose");

exports.handler = function(event, context, callback) {
  mongoose.connect(
    "mongodb://dninja:Redskins1@ds159772.mlab.com:59772/trepic-admin"
  );
  callback(null, {
    statusCode: 200
  });
};
