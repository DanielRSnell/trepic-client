import intialState from "./intialState";
export default (state = intialState.lodge, action) => {
  switch (action.type) {
    case "GET_LODGE":
      return {
        profile: action.payload
      };
    default:
      return state;
  }
};
