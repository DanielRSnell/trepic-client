import intialState from "./intialState";
export default (state = intialState.story, action) => {
  switch (action.type) {
    case "STORY_LIST":
      return {
        list: action.payload
      };
    case "GET_STORY":
      return {
        profile: action.payload
      };
    case "GET_STORIES":
      return {
        list: action.payload
      };
    default:
      return state;
  }
};
