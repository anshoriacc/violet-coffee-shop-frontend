import React, { Component } from "react";
import "./Payment.scoped.css";

import Navbar from "../../components/Navbar/NavLog";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import { formater } from "../../helpers/formatNumber";

import Image from "../../assets/images/background-profile.jpg";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      totalPrice: 0,
    };
  }

  Edit = () => {
    this.setState({ isEdit: !this.state.isEdit });
    console.log(this.state.isEdit);
  };

  subTotal = () => {
    let total = 0;
    for (let i = 0; i < this.props.delivery.length; i++) {
      total += this.props.delivery[i].totalPrice;
    }
    console.log("TOTAL BRO", total);
    this.setState({ totalPrice: total });
  };

  componentDidMount() {
    this.subTotal();
    console.log("USER DATA", this.props.users);
  }

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
            {this.props.delivery.map((val) => {
              return (
                <div className="card-item">
                  <img src={Image} alt="" className="product-image" />
                  <div>
                    <p className="product-name">{val.name}</p>
                    <p className="product-order">x{val.count}</p>
                    <p className="size-order">{val.size}</p>
                    <p className="product-price">{formater.format(val.totalPrice)}</p>
                  </div>
                </div>
              );
            })}
            {/* <div className="card-item">
              <img src={Image} alt="" className="product-image" />
              <p className="product-name">Caffee Latte</p>
              <p className="product-order">x1</p>
              <p className="size-order">Regular</p>
              <p className="product-price">IDR 25.000</p>
            </div> */}
            <div className="order">
              <div className="subtotal">
                <p className="sub-total">SUBTOTAL</p>
                <p className="sub-idr">{formater.format(this.state.totalPrice)}</p>
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
                <p className="total-idr">{formater.format(this.state.totalPrice + 5000 + 10000)}</p>
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
                  <input type="email" class="form-control shadow-none" placeholder={`Delivery To ${this.props.users.delivery_adress}`} id="exampleInputEmail1" aria-describedby="emailHelp" disabled={this.state.isEdit} />
                </div>
                <div class="mb-0">
                  <input type="text" class="form-control shadow-none" placeholder={this.props.users.delivery_adress} id="exampleInputPassword1" disabled={this.state.isEdit} />
                </div>
                <div class="mb-0">
                  <input type="text" class="form-control shadow-none" placeholder={`+62 ${this.props.users.phone}`} id="exampleInputPassword1" disabled={this.state.isEdit} />
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

const mapStateToProps = (state) => {
  return {
    delivery: state.delivery.item,
    users: state.auth.userData,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Payment);
