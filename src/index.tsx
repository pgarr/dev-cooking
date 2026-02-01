import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./translations/i18n";
import App from "./app/app";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error("Failed to find the root element");
}
