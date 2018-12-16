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
        return res.data;
      })
      .catch(() => {
        Promise.reject();
      });
  };
}

export function multipleStoryAction(ids) {
  return function(dispatch) {
    return axios
      .get(`${process.env.REACT_APP_BASE}story?include=${ids}`)
      .then(res => {
        dispatch({
          type: type.GET_STORIES,
          payload: res.data
        });
        return res.data.meta_box.exp_to_story_to.join();
      })
      .catch(e => console.log(e));
  };
}
