import intialState from "./intialState";
export default (state = intialState.packages, action) => {
  switch (action.type) {
    case "GET_ZUMATA_PACKAGES":
      return {
        items: action.payload
      };
    default:
      return state;
  }
};
