import axios from "axios";
import * as type from "../constants/types";
require("dotenv").config();

export const tokenAction = () => dispatch => {
  return axios
    .post(`${process.env.REACT_APP_AUTH_URL}`, {
      username: "dsnell",
      password: "Redskins1"
    })
    .then(res => {
      localStorage.setItem("WP_TOKEN", res.data.token);
      dispatch({
        type: type.AM_TOKEN,
        payload: res.data
      });
    })
    .catch(e => console.error(e));
};
