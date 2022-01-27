import React from "react";
import "./card_coupon.scoped.css";

import mother from "../../assets/icons/mother_event.png";

export default function card_coupon(props) {
  return (
    <div className="main">
      <div className="motherDays">
        <img src={mother} alt="" />
        <p className="event-name">HAPPY MOTHER DAYS!</p>
        <p className="promo">Get one of our favorite menu for free</p>
      </div>
    </div>
  );
}
