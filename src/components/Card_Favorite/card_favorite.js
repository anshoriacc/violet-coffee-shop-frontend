import React from "react";
import "./card_favorite.scoped.css";

import Dumy from "../../assets/images/background-profile.jpg";

function card_favorite(props) {
  return (
    <div className="main">
      <img src={Dumy} alt="" />
      <p className="name">Coffee latte</p>
      <p className="price">IDR 50.000</p>
      <button className="btn btn-warning">Select</button>
    </div>
  );
}

export default card_favorite;
