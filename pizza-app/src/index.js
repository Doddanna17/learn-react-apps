import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <br></br>
      <PizzaApp />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function PizzaApp() {
  return (
    <div>
      <h2> Pizza Spinaci</h2>
      <h3> Tomato, mozarella, spinach, and ricotta cheese</h3>
      <img src="pizzas/spinaci.jpg" alt="Pizza" />
    </div>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
