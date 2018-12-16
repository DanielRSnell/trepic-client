import axios from "axios";
import * as type from "../constants/types";
require("dotenv").config();

export function GetLodge(id) {
  console.log(id);
  return function(dispatch) {
    return axios
      .get(`https://admin.trepic.co/wp-json/wp/v2/lodge/${id}`)
      .then(res => {
        dispatch({
          type: type.GET_LODGE,
          payload: res.data
        });
        return Promise.resolve();
      })
      .catch(e => console.error(e));
  };
}
