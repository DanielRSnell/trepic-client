import axios from "axios";
import * as type from "../constants/types";
require("dotenv").config();

export const countAction = count => dispatch => {
  axios
    .get(`${process.env.REACT_APP_BASE}influencer?per_page=${count}`)
    .then(res => {
      dispatch({
        type: type.INFLUENCER_LIST,
        payload: res.data
      });
      Promise.resolve();
    })
    .catch(() => {
      Promise.reject();
    });
};

export const listAction = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_BASE}influencer`)
    .then(res => {
      dispatch({
        type: type.INFLUENCER_LIST,
        payload: res.data
      });
      Promise.resolve();
    })
    .catch(() => {
      Promise.reject();
    });
};

export const paginationAction = page_number => dispatch => {
  axios
    .get(`${process.env.REACT_APP_BASE}influencer?page=${page_number}`)
    .then(res => {
      dispatch({
        type: type.INFLUENCER_LIST,
        payload: res.data
      });
      Promise.resolve();
    })
    .catch(() => {
      Promise.reject();
    });
};

export function GetInfluencer(id) {
  return function(dispatch) {
    return axios
      .get(`${process.env.REACT_APP_BASE}influencer/${id}`)
      .then(res => {
        dispatch({
          type: type.GET_INFLUENCER,
          payload: res.data
        });
        return res.data["meta_box"].story_to_influencer_to.join();
      })
      .catch(() => {
        return Promise.reject();
      });
  };
}

export const multipleInfluencerAction = ids => dispatch => {
  axios
    .get(`${process.env.REACT_APP_BASE}influencer?include=${ids}`)
    .then(res => {
      dispatch({
        type: type.GET_INFLUENCERS,
        payload: res.data
      });
      Promise.resolve();
    })
    .catch(() => {
      Promise.reject();
    });
};
