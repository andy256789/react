import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import Memo from "./Memo.jsx";
import Callback from "./Callback.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Callback />
    </StrictMode>
);
