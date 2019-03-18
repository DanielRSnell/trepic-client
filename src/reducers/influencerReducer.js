import intialState from "./intialState";
export default (state = intialState.influencer, action) => {
  switch (action.type) {
    case "INFLUENCER_LIST":
      return {
        list: action.payload
      };
    case "GET_INFLUENCER":
      return {
        profile: action.payload
      };
    case "GET_INFLUENCERS":
      return {
        list: action.payload
      };
    default:
      return state;
  }
};
