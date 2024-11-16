import { createRoot } from "react-dom/client";
import React from "react";
// import App from "./App.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const AccReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
);

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom React APP</h1>
//     </div>
//   );
// }

// const Random = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

createRoot(document.getElementById("root")).render(AccReactElement);
