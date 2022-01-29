import React from "react"
import "./CardCoupon.scoped.css"

export default function CardCoupon(props) {
  return (
    <>
      <div className="main">
        <div className={props.event}>
          <img src={props.pic} alt="pic-event" />
          <p className="event-name">{props.nameEvent}</p>
          <p className="promo">{props.ketEvent}</p>
        </div>
      </div>
      bootstrap
      <div className="row main m-3">
        <div className={`col-12 ${props.event}`}>
          <div className="row">
            <div className="col-4 border">
              <img src={props.pic} alt="pic-event" />
            </div>
            <div className="col-8 border ">
              <p className="">{props.nameEvent}</p>
              <p className="">{props.ketEvent}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
