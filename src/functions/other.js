const axios = require("axios");

exports.handler = function(event, context, callback) {
  axios
    .get("http://data.zumata.com/hotels/BCRb/en_us/long.json")
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
