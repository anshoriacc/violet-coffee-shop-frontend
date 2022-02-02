import React, { useState, useEffect, Component } from "react";
import "./CardFavorite.scoped.css";
import imageDefault from "../../assets/images/no-image.jpg";
import check from "../../assets/icons/checkFavorite.png";

class CardFavorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: []
    };
  }

  render() {
    // console.log(this.props);
    const dataFavorite = this.props.favoriteData;
    console.log("DATA-FAVORITE", dataFavorite);
    return (
      <div className="main">
        <img
          src={!dataFavorite.image ? imageDefault : dataFavorite.image}
          alt=""
        />
        <p className="name">{dataFavorite.name}</p>
        <div className="topping">
          <p>Shot of Coffee</p>
          <p>Vanilla Whipped Cream</p>
          <p>Chocolate Biscuits</p>
          <p>Strawberry Syrup</p>
          <p>Sliced strawberry on Top</p>
        </div>
        <p className="price">Rp.{dataFavorite.price}</p>
        <button className="btn btn-warning">Select</button>
      </div>
    );
  }
}

export default CardFavorite;
