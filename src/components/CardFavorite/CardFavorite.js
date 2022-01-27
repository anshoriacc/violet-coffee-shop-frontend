import React from "react"
import "./CardFavorite.scoped.css"

import Dumy from "../../assets/images/background-profile.jpg"

function CardFavorite(props) {
  return (
    <div className="main">
      <img src={Dumy} alt="" />
      <p className="name">Coffee latte</p>
      <p className="price">IDR 50.000</p>
      <button className="btn btn-warning">Select</button>
    </div>
  )
}

export default CardFavorite
