import React from "react";
import "./CardProduct.scoped.css";

// DUMMY IMG\
import image from "../../assets/images/no-image.jpg";
import { Link } from "react-router-dom";

function CardProduct({ dataProduct }) {
  return (
    <>
      <Link to={`/product/detail/${dataProduct.id}`}>
        <div className="main">
          <img src={dataProduct.image ? dataProduct.image : image} alt="" />
          <p className="name">{dataProduct.name}</p>
          <p className="price">{`IDR. ${dataProduct.price}`}</p>
        </div>
      </Link>
    </>
  );
}

export default CardProduct;
