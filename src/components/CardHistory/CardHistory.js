import React from "react"
import "./CardHistory.scoped.css"

import Image from "../../assets/images/background-profile.jpg"

export default function CardHistory(props) {
  return (
    <div className="main">
      <img src={Image} alt="" />
      <p className="name">Coffe Latte</p>
      <p className="price">IDR 15.000</p>
      <p className="delivery">Delivered to table 88</p>
    </div>
  )
}
