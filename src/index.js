import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { robots } from "./robots";
import "tachyons";
import { searchRobots } from "./reducers";

//store uses the root reducer or whatever reducer we have to create a store and create that object tree of our state
const store = createStore(searchRobots);

//PRovider component passes down the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
