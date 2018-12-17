const axios = require("axios");

exports.handler = function(event, context, callback) {
  const query = event.queryStringParameters;
  axios
    .get(`http://data.zumata.com/hotels/${query.id}/en_us/long.json`)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data)
      });
    })
    .catch(err => {
      console.log(err);
      callback(new Error("Something went wrong"));
    });
};
