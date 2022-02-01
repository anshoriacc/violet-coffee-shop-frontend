import React, { Component } from "react";
import "./Product_detail.scoped.css";

// COMPONENT
import Navbar from "../../components/Navbar/NavLog";
import Footer from "../../components/Footer/Footer";

import { detailProduct } from "../../utils/product";

import Image from "../../assets/images/background-profile.jpg";

export default class Product_detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduct: {},
    };
    this.inputFile = React.createRef();
  }

  componentDidMount() {
    detailProduct(this.props.match.params.id)
      .then((res) => {
        // console.log(res);
        this.setState({ dataProduct: { ...res.data.data } });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { name, image, price, description } = this.state.dataProduct;

    return (
      <div className="main">
        <Navbar />
        <div className="jumbotron">
          <a href="/" className="link">
            <p className="pref">Product </p> ||{" "}
            <p className="ProductName">{name}</p>
          </a>
          <div className="wrapper">
            <div className="wrapper-left">
              <img src={image} alt="" />
              <div className="flying-card">
                <p>Delivery and time</p>
                <div className="delivery-btn">
                  <input
                    type="radio"
                    class="btn-check custom-control-input"
                    name="options"
                    id="option1"
                    autocomplete="off"
                  />
                  <label class="btn btn-secondary dine-in" for="option1">
                    Dine In
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option2"
                    autocomplete="off"
                  />
                  <label class="btn btn-secondary door-delivery" for="option2">
                    Door Delivery
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option3"
                    autocomplete="off"
                  />
                  <label class="btn btn-secondary pick-up" for="option3">
                    Pick Up
                  </label>
                </div>

                <div className="time">
                  <p>Now</p>
                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option2"
                    autocomplete="off"
                  />
                  <label class="btn btn-secondary yes" for="option2">
                    Yes
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option3"
                    autocomplete="off"
                  />
                  <label class="btn btn-secondary no" for="option3">
                    No
                  </label>
                </div>
                <div className="set-time">
                  <p>Set time</p>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Default input"
                    aria-label="default input example"
                  />
                </div>
              </div>
            </div>
            <div className="wrapper-right">
              <p className="title">{name}</p>
              <p className="describtion">{description}</p>
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
              <p className="price">{`IDR ${price}`}</p>
              <button className="btn btn-success">Add to chart</button>
              <button className="btn btn-warning">Ask a staff</button>
            </div>
          </div>
          <div className="second-wrapper">
            <div className="size">
              <p>Choose a size</p>

              <div className="size-btn">
                <input
                  type="radio"
                  class="btn-check"
                  name="options"
                  id="option1"
                  autocomplete="off"
                />
                <label class="btn btn-secondary" for="option1">
                  R
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-secondary" for="option2">
                  L
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                <label class="btn btn-secondary" for="option3">
                  XL
                </label>
              </div>
            </div>
            <div className="cart">
              <img src={image} alt="" />
              <p className="product-name">{name}</p>
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
