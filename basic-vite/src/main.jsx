import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const AccReactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click to visit google",
//   {2+2}
// );

createRoot(document.getElementById("root")).render(<App />);
