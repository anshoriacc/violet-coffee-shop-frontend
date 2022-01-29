import React from "react"
import "./CardHomeTesti.scoped.css"
import profilePhoto from "../../assets/images/dummy-profile.png"
import iconStart from "../../assets/icons/star.png"

function CardHomeTesti() {
  return (
    <>
      <div className="card-home">
        <div className="row">
          <div className="col-lg-8 wrapper-title">
            <img
              src={profilePhoto}
              alt="profile"
              width={50}
              className="photo-profile"
            />
            <div className="title">
              <p className="name">Viezh Robert</p>
              <p className="location">Warsaw, Poland</p>
            </div>
          </div>
          <div className="col-lg-4 wrapper-rating">
            <p className="rating">4.5</p>
            <img src={iconStart} alt="star" className="icon-star" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 wrapper-coment">
            <p className="coment">
              “Wow... I am very happy to spend my whole day here. the Wi-fi is
              good, and the coffee and meals tho. I like it here!! Very
              recommended!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardHomeTesti
