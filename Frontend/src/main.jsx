import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SiteProvider } from "./contexts/SiteContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SiteProvider>
      <App />
    </SiteProvider>
  </BrowserRouter>
);
