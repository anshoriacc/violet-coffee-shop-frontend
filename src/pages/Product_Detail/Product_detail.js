import React, { Component } from "react";
import "./Product_detail.scoped.css";

// COMPONENT
import Navbar from "../../components/Navbar/NavLog";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import {
  deletDeliveryItem,
  setDeliveryItem
} from "../../Redux/actions/delivery";

import { Link } from "react-router-dom";
// import { setDeliveryItem } from "../../Redux/actions/delivery";
import { bindActionCreators } from "redux";
import { detailProduct } from "../../utils/product";
import { formater } from "../../helpers/formatNumber";

// import Image from "../../assets/images/background-profile.jpg";

class Product_detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduct: {},
      counter: 1,
      size: "",
      now: "",
      deliveryOption: ""
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

  addCount = () => {
    const counter = this.state.counter;
    this.setState({ counter: counter + 1 });
  };

  minusCount = () => {
    const counter = this.state.counter;
    if (this.state.counter > 1) {
      this.setState({ counter: counter - 1 });
    } else {
      return;
    }
  };

  setDelivery = () => {
    const body = [
      ...this.props.delivery,
      {
        name: this.state.dataProduct.name,
        image: this.state.dataProduct.image,
        quantity: this.state.counter,
        now: this.state.now,
        totalPrice: this.state.dataProduct.price * this.state.counter,
        size: this.state.size,
        devlieryOption: this.state.deliveryOption,
        product_id: this.state.dataProduct.id
      }
    ];
    this.props.setDeliveryItem(body);
    // console.log("ITEMS", this.props.delivery);
    //     count: this.state.counter,
    //     now: this.state.now,
    //     totalPrice: this.state.dataProduct.price * this.state.counter,
    //     devlieryOption: this.state.deliveryOption,
    //     size: this.state.size,
    //   },
    // ];
    this.props.setDeliveryItem(body);
  };

  render() {
    const { name, image, price, description } = this.state.dataProduct;
    // console.log("CHECKED", this.props.delivery);
    // console.log("CHECKED", this.state.size);
    const user = this.props.user.userData;
    const { role } = user;
    const id = this.props.match.params.id;
    console.log("ROLE", role);
    console.log("ID PRODUCT", id);
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
                    type="checkbox"
                    class="btn-check custom-control-input"
                    value="Dine in"
                    onChange={(e) =>
                      this.setState({ deliveryOption: e.target.value })
                    }
                    name="options"
                    id="dine in"
                    autocomplete="off"
                  />
                  <label class="btn btn-secondary dine-in" for="dine in">
                    Dine In
                  </label>

                  <input
                    type="checkbox"
                    class="btn-check"
                    name="options"
                    value="Door delivery"
                    onChange={(e) =>
                      this.setState({ deliveryOption: e.target.value })
                    }
                    id="door delivery"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-secondary door-delivery"
                    for="door delivery">
                    Door Delivery
                  </label>

                  <input
                    type="checkbox"
                    class="btn-check"
                    name="options"
                    id="Pick Up"
                    value="Pick up"
                    onChange={(e) =>
                      this.setState({ deliveryOption: e.target.value })
                    }
                    autocomplete="off"
                  />
                  <label class="btn btn-secondary pick-up" for="Pick Up">
                    Pick Up
                  </label>
                </div>

                <div className="time">
                  <p>Now</p>
                  <input
                    type="checkbox"
                    class="btn-check"
                    name="options"
                    id="yes"
                    value="yes"
                    onChange={(e) => this.setState({ now: e.target.value })}
                    autocomplete="off"
                  />
                  <label class="btn btn-secondary yes" for="yes">
                    Yes
                  </label>

                  <input
                    type="checkbox"
                    class="btn-check"
                    name="options"
                    id="no"
                    value="no"
                    onChange={(e) => this.setState({ now: e.target.value })}
                    autocomplete="off"
                  />
                  <label class="btn btn-secondary no" for="no">
                    No
                  </label>
                </div>

                <div className="set-time">
                  <p>Set time</p>
                  <input
                    class="form-control shadow-none"
                    type="text"
                    placeholder="Enter time to reservation"
                    aria-label="default input example"
                  />
                </div>
              </div>



            </div>
            <div className="wrapper-right">
              <p className="title">{name}</p>

              {role === 'admin' ? (
                <Link to={`/promo/edit/${this.props.match.params.id}`} style={{ textDecoration: 'none' }}>
                  <p style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: '#6A4029',
                  }}>Edit Promo</p>
                </Link>
              ) : (
                <></>
              )}

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
                <button
                  className="btn btn-primary plus"
                  onClick={this.minusCount}>
                  -
                </button>
                <p className="count">{this.state.counter}</p>
                <button
                  className="btn btn-primary minus"
                  onClick={this.addCount}>
                  +
                </button>
              </div>
              <p className="price">{`${formater.format(price)}`}</p>
              <button className="btn btn-success" onClick={this.setDelivery}>
                Add to chart
              </button>
              {role !== "admin" ? (
                <button className="btn btn-warning">Ask a staff</button>
              ) : (
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    this.props.history.push(`/product/edit/${id}`);
                  }}>
                  Edit Product
                </button>
              )}
            </div>
          </div>
          <div className="second-wrapper">
            <div className="size">
              <p>Choose a size</p>

              <div className="size-btn">
                <input
                  type="checkbox"
                  class="btn-check"
                  name="options"
                  id="regular"
                  value="R"
                  onChange={(e) => this.setState({ size: e.target.value })}
                  autocomplete="off"
                />
                <label class="btn btn-secondary" for="regular">
                  R
                </label>

                <input
                  type="checkbox"
                  class="btn-check"
                  name="options"
                  id="large"
                  value="L"
                  onChange={(e) => this.setState({ size: e.target.value })}
                  autocomplete="off"
                />
                <label class="btn btn-secondary" for="large">
                  L
                </label>

                <input
                  type="checkbox"
                  class="btn-check"
                  name="options"
                  value="XL"
                  onChange={(e) => this.setState({ size: e.target.value })}
                  id="extra large"
                  autocomplete="off"
                />
                <label class="btn btn-secondary" for="extra large">
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
              <button
                className="btn btn-warning checkout-btn"
                onClick={() => this.props.history.push("/product/payment")}>
                {" "}
                <i class="bi bi-arrow-right" />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    delivery: state.delivery.item,
    user: state.auth
  };
};

const mapDispatchToPropps = (dispatch) => {
  return {
    setDeliveryItem: bindActionCreators(setDeliveryItem, dispatch),
    delDeliveryItme: bindActionCreators(deletDeliveryItem, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPropps
)(Product_detail);
