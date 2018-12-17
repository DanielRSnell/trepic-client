import axios from "axios";
import * as type from "../constants/types";
require("dotenv").config();

export function GetStory(id) {
  return function(dispatch) {
    return axios
      .get(`${process.env.REACT_APP_BASE}story/${id}`)
      .then(res => {
        dispatch({
          type: type.GET_STORY,
          payload: res.data
        });
        return Promise.resolve();
      })
      .catch(e => console.error(e));
  };
}

export function GetInfluencer(id) {
  return function(dispatch) {
    return axios
      .get(`${process.env.REACT_APP_BASE}influencer/${id}`)
      .then(res => {
        dispatch({
          type: type.GET_INFLUENCER,
          payload: res.data
        });
        return Promise.resolve();
      })
      .catch(e => console.error(e));
  };
}

export function GetLodge(id) {
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

export function hotelAction(id) {
  console.log(id);
  return function(dispatch) {
    return axios
      .get(`${process.env.REACT_APP_API + "test?id=" + id}`)
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
