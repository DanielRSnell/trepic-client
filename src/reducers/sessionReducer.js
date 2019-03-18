export default (state = {}, action) => {
  switch (action.type) {
    case "AM_TOKEN":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
