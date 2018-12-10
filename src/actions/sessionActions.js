import axios from "axios";

export const tokenAction = () => dispatch => {
  return axios
    .post(process.env.AUTH_URL, {
      username: "dsnell",
      password: "Redskins1"
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: "AM_TOKEN",
        payload: res.data
      });
    });
};
