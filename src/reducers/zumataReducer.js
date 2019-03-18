import intialState from "./intialState";
export default (state = intialState.zumata, action) => {
  switch (action.type) {
    case "GET_ZUMATA_HOTEL":
      return {
        hotel: action.payload
      };
    default:
      return state;
  }
};
