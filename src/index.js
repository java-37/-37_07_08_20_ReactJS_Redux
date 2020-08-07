import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from './comopnents/Counter';

// import counterReducer from "./store/counterReducer";
import rootReducer from "./store/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Cars from "./comopnents/Cars";

// const store = createStore(counterReducer);
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
      <Counter/>
      <hr/>
      <Cars/>
  </Provider>,
  document.getElementById("root")
);
