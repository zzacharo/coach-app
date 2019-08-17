import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import sessionReducer from "./components/UserSession/reducer";
import loginReducer from "./screens/Login/reducer";
import userReducer from "./screens/UserProfile/reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  login: loginReducer,
  user: userReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
