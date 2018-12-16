import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import influencer from "./influencerReducer";
import story from "./storyReducer";
import zumata from "./zumataReducer";
import lodge from "./lodgeReducer";
export default combineReducers({
  sessionReducer,
  influencer,
  zumata,
  story,
  lodge
});
