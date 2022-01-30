import React from "react";
import "./CardHistory.scoped.css";

import Image from "../../assets/images/background-profile.jpg";

export default function CardHistory({ historyData }) {
  return (
    <div className="main">
      <img src={Image} alt="" />
      <div className="detail">
        <p className="name">Coffee Latte</p>
        <p className="price">IDR 15.000</p>
        <p className="delivery">Delivered to table 88</p>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        {/* <div class="form-check">
        </div> */}
      </div>
    </div>
  );
}
