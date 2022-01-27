import React from "react"
import "./CardCoupon.scoped.css"

import mother from "../../assets/icons/mother_event.png"

export default function CardCoupon(props) {
  return (
    <div className="main">
      <div className="motherDays">
        <img src={mother} alt="" />
        <p className="event-name">HAPPY MOTHER DAYS!</p>
        <p className="promo">Get one of our favorite menu for free</p>
      </div>
    </div>
  )
}
