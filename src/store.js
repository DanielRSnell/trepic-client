import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
export default function configureStore(intialState) {
  return createStore(
    rootReducer,
    intialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
