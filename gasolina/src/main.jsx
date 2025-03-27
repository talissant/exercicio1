import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppCal from "./AppCal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppCal />
  </StrictMode>
);
