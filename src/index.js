// @ts-nocheck
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "number-brm";
import { BrowserRouter } from "react-router-dom";

import rootReducer from "./context/reducers";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import MainLoader from "./components/loader/MainLoader";

const App = React.lazy(() => import("./App"));

const persistConfig = {
  key: "instagram",
  storage,
  blacklist: [],
  whitelist: ["auth", "heart", "save"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persister = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<MainLoader />}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persister}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
