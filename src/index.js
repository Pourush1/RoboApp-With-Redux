import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { searchRobots } from "./reducers";

//logger function which is a middlware we can apply that to our redux app, and this can be done using something called applyMiddleware which comes from redux package
const logger = createLogger();

//store uses the root reducer or whatever reducer we have to create a store and create that object tree of our state
const store = createStore(searchRobots, applyMiddleware(logger));

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
