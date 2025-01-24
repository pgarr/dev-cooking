import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import FirebaseProvider from "./firebase/firebaseProvider";

import "./index.css";
import "./translations/i18n";
import App from "./components/App/App";
import store from "./store/store";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <FirebaseProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FirebaseProvider>
      </Provider>
    </StrictMode>,
  );
} else {
  console.error("Failed to find the root element");
}
