import React from "react"
import "./CardProduct.scoped.css"

// DUMMY IMG\
import Image from "../../assets/images/background-profile.jpg"

function CardProduct(props) {
  return (
    <div className="main">
      <img src={Image} alt="" />
      <p className="name">Coffee Latte</p>
      <p className="price">IDR. 15.000</p>
    </div>
  )
}

export default CardProduct
