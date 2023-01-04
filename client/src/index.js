import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose } from "redux";
// configureStore => createStore
import thunk from "redux-thunk";
import reducers from "./reducers";

import App from "./App";

const Store = configureStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(<App />, document.getElementById("root"));

// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
