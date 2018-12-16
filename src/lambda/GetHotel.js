import axios from "axios";
export function GetHotel(event, context) {
  return axios
    .get(`http://data.zumata.com/hotels/BCRb/en_us/long.json`)
    .then(res => {
      return JSON.stringify(res.data);
    });
}
