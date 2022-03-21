import React from "react";
import Lottie from "lottie-react";
import "./loading.scoped.css";
import Animation from "../../assets/animations/loading-brewing-coffee.json";

function index() {
  return (
    <div className="loading-wrapper">
      <div className="load">
        <Lottie animationData={Animation} loop autoPlay />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}

export default index;
