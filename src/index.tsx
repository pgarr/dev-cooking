import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import "./translations/i18n";
import App from "./app/app";
import store from "./store/store";
import FirebaseProvider from "./firebase/firebaseContext";

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
