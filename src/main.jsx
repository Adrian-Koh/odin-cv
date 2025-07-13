import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CV from "./components/CV";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CV />
  </StrictMode>,
);
