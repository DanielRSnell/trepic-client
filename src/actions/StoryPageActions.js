import axios from "axios";
import * as type from "../constants/types";
require("dotenv").config();

export function GetStory(id) {
  return function(dispatch) {
    return axios
      .get(`${process.env.REACT_APP_BASE}story/${id}`)
      .then(res => {
        GetExpImages(res.data, dispatch);
        // dispatch({
        //   type: type.GET_STORY,
        //   payload: res.data
        // });
        return Promise.resolve();
      })
      .catch(e => console.error(e));
  };
}

function GetExpImages(data, dispatch) {
  console.log('GET STORY', data);
  data.meta_box.experiences.map((item, index) => {
    const arr = []
    axios.get(`${process.env.REACT_APP_BASE}media/${item.exp_gallery[0]}`).then(res => {
      console.log(res.data.media_details.sizes.full.source_url)
      data.meta_box.experiences[index].exp_gallery = res.data.source_url
    })
  })
  dispatch({
    type: type.GET_STORY,
    payload: data
  })
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

export function hotelPackages(data) {
  return function(dispatch) {
    return axios
      .get(
        `${process.env.REACT_APP_API +
          "packages?hotel_id=" +
          data.id +
          "&check_in_date=" +
          data.startDate +
          "&check_out_date=" +
          data.endDate +
          "&room_count=1&adult_count=" +
          data.adults +
          "&children=" +
          data.children +
          "&currency=USD&source_market=USD&key=" +
          process.env.REACT_APP_ZUMATA}`,
        {},
        {
          header: {
            "X-session": process.env.REACT_APP_ZUMATA
          }
        }
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: type.GET_ZUMATA_PACKAGES,
          payload: res.data
        });
        return Promise.resolve();
      })
      .catch(e => Promise.reject());
  };
}
