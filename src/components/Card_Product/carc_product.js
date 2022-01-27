import React from "react";
import "./card_product.scoped.css";

// DUMMY IMG\
import Image from "../../assets/images/background-profile.jpg";

function carc_product(props) {
  return (
    <div className="main">
      <img src={Image} alt="" />
      <p className="name">Coffee Latte</p>
      <p className="price">IDR. 15.000</p>
    </div>
  );
}

export default carc_product;
