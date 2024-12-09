import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import MainBody from "./components/MainBody.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MainBody />
    </StrictMode>
);
