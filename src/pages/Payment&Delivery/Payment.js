import React, { Component } from "react";
import "./Payment.scoped.css";

import Navbar from "../../components/Navbar/NavLog";
import Footer from "../../components/Footer/Footer";

import Image from "../../assets/images/background-profile.jpg";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  Edit = () => {
    this.setState({ isEdit: !this.state.isEdit });
    console.log(this.state.isEdit);
  };

  render() {
    return (
      <div className="main">
        <Navbar />
        <div className="banner">
          <p className="title">
            Checkout your <br /> item now!
          </p>
          <div className="order-card">
            <p className="order-summary">Order summary</p>
            <div className="card-item">
              <img src={Image} alt="" className="product-image" />
              <p className="product-name">Caffee Latte</p>
              <p className="product-order">x1</p>
              <p className="size-order">Regular</p>
              <p className="product-price">IDR 25.000</p>
            </div>
            <div className="cards">
              <img src={Image} alt="" className="product-image" />
              <p className="product-name">Caffee Latte</p>
              <p className="product-order">x1</p>
              <p className="size-order">Regular</p>
              <p className="product-price">IDR 25.000</p>
            </div>
            <div className="order">
              <div className="subtotal">
                <p className="sub-total">SUBTOTAL</p>
                <p className="sub-idr">IDR 50.000</p>
              </div>
              <div className="tax-fees">
                <p className="tax">TAX & FEES</p>
                <p className="fees">IDR 5.000</p>
              </div>
              <div className="shipping">
                <p className="ship">SHIPPING</p>
                <p className="ship-idr">IDR 10.000</p>
              </div>
              <div className="total">
                <p className="total-order">TOTAL</p>
                <p className="total-idr">IDR 65.000</p>
              </div>
            </div>
          </div>
          <div className="detail-address">
            <div className="head">
              <p className="address-title">Addres detail</p>
              <button className="btn btn-link shadow-none" onClick={this.Edit}>
                Edit
              </button>
            </div>
            <div className="address-card">
              <form>
                <div class="mb-0">
                  <input type="email" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={this.state.isEdit} />
                </div>
                <div class="mb-0">
                  <input type="text" class="form-control shadow-none" id="exampleInputPassword1" disabled={this.state.isEdit} />
                </div>
                <div class="mb-0">
                  <input type="text" class="form-control shadow-none" id="exampleInputPassword1" disabled={this.state.isEdit} />
                </div>
              </form>
            </div>
          </div>
          <div className="payment">
            <div className="head">
              <p className="payment-title">Payment Method</p>
            </div>
            <div className="payment-card">card</div>
          </div>
          <button className="btn btn-primary confirm">Confirm and pay</button>
        </div>
        <Footer />
      </div>
    );
  }
}
