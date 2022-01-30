// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import rpm from "redux-promise-middleware";
// import reducers from "./reducers";

import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import rpm from "redux-promise-middleware";
import reducers from "./reducers";

const saveState = (state) => {
  try {
    console.log("masuk load state");
    const stringifyState = JSON.stringify(state);
    localStorage.setItem("state", stringifyState);
  } catch (error) {
    alert("Theres error from redux store ");
    console.log(error);
  }
};

const loadState = () => {
  try {
    const stateFromLocal = localStorage.getItem("state");
    console.log("masuk load state");
    if (stateFromLocal === null) {
      return undefined;
    } else {
      return JSON.parse(stateFromLocal);
    }
  } catch (error) {
    console.log(error);
  }
};

const theState = loadState();
const enhancers = applyMiddleware(rpm, Logger);
const store = createStore(reducers, theState, enhancers);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
