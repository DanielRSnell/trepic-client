import axios from "axios";
import * as type from "../constants/types";
require("dotenv").config();

export function hotelAction(id) {
  console.log(id);
  return function(dispatch) {
    return axios
      .get(
        `http://data.zumata.com/hotels/BCRb/en_us/long.json`,
        {},
        {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(res => {
        dispatch({
          type: type.GET_ZUMATA_HOTEL,
          payload: res.data
        });
        return Promise.resolve();
      })
      .catch(e => Promise.reject());
  };
}

export function hotelMultipleAction(id) {
  // return function(dispatch) {
  //   return axios
  //     .get(`http://data.zumata.com/hotels/${id}/en_us/long.json`)
  //     .then(res => {
  //       dispatch({
  //         type: type.GET_ZUMATA_HOTEL,
  //         payload: res.data
  //       });
  //       return Promise.resolve();
  //     })
  //     .catch(e => Promise.reject());
  // };
}
