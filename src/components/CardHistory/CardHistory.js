import React from "react";
import "./CardHistory.scoped.css";

function CardHistory(props) {
  return (
    <div className="main">
      <img src={props.image} alt="" />
      <div className="detail">
        <p className="name">{props.name}</p>
        <p className="price">{props.price}</p>
        <p className="delivery">{props.delivery}</p>
        <input className="form-check-input" type="checkbox" value={props.id} />
        {/* <div class="form-check">
    </div> */}
      </div>
    </div>
  );
}

export default CardHistory;
