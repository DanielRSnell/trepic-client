const axios = require("axios");

exports.handler = function(event, context, callback) {
  const query = event.queryStringParameters;
  console.log(event);
  axios
    .get(
      `https://api-v3.zumata.com/hotel_rooms?hotel_id=${
        query.hotel_id
      }&check_in_date=${query.check_in_date}&check_out_date=${
        query.check_out_date
      }&adult_count=${query.adult_count}&children=${
        query.children
      }&currency=USD&source_market=US&&room_count=1`,
      {
        headers: {
          "X-Api-Key": query.key
        }
      }
    )
    .then(res => {
      console.log(res.data.hotels[0]);
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
