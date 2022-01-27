import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import Router from "./Main";
import Card from "./components/Card_Favorite/card_favorite";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router /> */}
    <Card />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
