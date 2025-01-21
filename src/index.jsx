import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import FirebaseProvider from "./firebase/firebase";

import "./index.css";
import "./translations/i18n";
import App from "./components/App/App";
import store from "./store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <FirebaseProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseProvider>
    </Provider>
  </StrictMode>
);
