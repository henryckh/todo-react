import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import throttle from "lodash/throttle";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { loadState, saveState } from "./utils/localStorage";

const middleware = [thunk];
const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
);

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
