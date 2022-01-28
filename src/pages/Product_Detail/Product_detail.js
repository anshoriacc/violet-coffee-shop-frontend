import React, { Component } from "react";
import "./Product_detail.scoped.css";

// COMPONENT
import Navbar from "../../components/Navbar/NavLog";
import Footer from "../../components/Footer/Footer";

import Image from "../../assets/images/background-profile.jpg";

export default class Product_detail extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <div className="jumbotron">
          <a href="/" className="link">
            <p className="pref">Product </p> || <p className="ProductName">Coffee latte</p>
          </a>
          <div className="wrapper">
            <div className="wrapper-left">
              <img src={Image} alt="" />
              <div className="flying-card">
                <p>Delivery and time</p>
                <div className="delivery-btn">
                  <input type="radio" class="btn-check custom-control-input" name="options" id="option1" autocomplete="off" />
                  <label class="btn btn-secondary dine-in" for="option1">
                    Dine In
                  </label>

                  <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                  <label class="btn btn-secondary door-delivery" for="option2">
                    Door Delivery
                  </label>

                  <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
                  <label class="btn btn-secondary pick-up" for="option3">
                    Pick Up
                  </label>
                </div>

                <div className="time">
                  <p>Now</p>
                  <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                  <label class="btn btn-secondary yes" for="option2">
                    Yes
                  </label>

                  <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
                  <label class="btn btn-secondary no" for="option3">
                    No
                  </label>
                </div>
                <div className="set-time">
                  <p>Set time</p>
                  <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                </div>
              </div>
            </div>
            <div className="wrapper-right">
              <p className="title">Coffe Latte</p>
              <p className="describtion">
                Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
              </p>
              <p className="delivery-time">
                Delivery only on{" "}
                <strong>
                  {" "}
                  Monday to <br /> friday{" "}
                </strong>{" "}
                at <strong>1 - 7 pm</strong>
              </p>
              <div className="counter">
                <button className="btn btn-primary plus">+</button>
                <p className="count">1</p>
                <button className="btn btn-primary minus">-</button>
              </div>
              <p className="price">IDR 35.000</p>
              <button className="btn btn-success">Add to chart</button>
              <button className="btn btn-warning">Ask a staff</button>
            </div>
          </div>
          <div className="second-wrapper">
            <div className="size">
              <p>Choose a size</p>

              <div className="size-btn">
                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" />
                <label class="btn btn-secondary" for="option1">
                  R
                </label>

                <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                <label class="btn btn-secondary" for="option2">
                  L
                </label>

                <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
                <label class="btn btn-secondary" for="option3">
                  XL
                </label>
              </div>
            </div>
            <div className="cart">
              <img src={Image} alt="" />
              <p className="product-name">Coffe Latte</p>
              <ul className="list-menu">
                <li>x1 (Large)</li>
                <li>x1 (Regular)</li>
              </ul>
              <p className="checkout">Checkout</p>
              <button className="btn btn-warning checkout-btn">
                {" "}
                <i class="bi bi-arrow-right" />{" "}
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
