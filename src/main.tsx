import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import reduxPromise from "redux-promise";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { appConstants } from "./util/Constant.ts";
import Main from "./component/Main.tsx";
import { Login } from "./authorization/Login.tsx";
import { rootReducer } from "./reducers/root.reducer.ts";

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <BrowserRouter>
        <App>
          <switch>
            <Route
              path={appConstants.loginRoute}
              Component={Login}
            />
            <Route
              path={appConstants.main}
              Component={Main}
            />
          </switch>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
