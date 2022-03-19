import { combineReducers } from "redux";
import authReducer from "./auth";
import deliveryReducer from "./delivery";

const reducers = combineReducers({
  auth: authReducer,
  delivery: deliveryReducer,
});

export default reducers;
