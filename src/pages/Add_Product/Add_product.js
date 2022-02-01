import React, { Component } from "react";
import "./Add_product.scoped.css";

import Navbar from "../../components/Navbar/NavLog";
import Footer from "../../components/Footer/Footer";

import Camera from "../../assets/icons/Camera.png";

import FormData from "form-data";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addProduct } from "../../utils/product";

class Add_product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      newImage: "",
      category: "",
    };
    this.inputFile = React.createRef();
  }

  selectedFile = (event) => {
    const img = event.target.files[0];
    this.setState({
      image: img,
      newImage: URL.createObjectURL(img),
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const token = this.props.token;
    const body = new FormData();

    body.append("name", e.target.name.value);
    body.append("description", e.target.description.value);
    body.append("price", e.target.price.value);
    body.append("stock", e.target.stock.value);
    body.append("category", this.state.category);
    body.append("start_delivery", e.target.start_delivery.value);
    body.append("end_delivery", e.target.end_delivery.value);
    body.append("image", this.state.image);
    body.append("home_delivery", e.target.home_delivery.checked ? 1 : 0);
    body.append("dine_in", e.target.dine_in.checked ? 1 : 0);
    body.append("take_away", e.target.take_away.checked ? 1 : 0);
    if (this.state.category === "food") {
      body.append("size_1", e.target.size_1.checked ? "250gr" : null);
      body.append("size_2", e.target.size_2.checked ? "300gr" : null);
      body.append("size_3", e.target.size_3.checked ? "500gr" : null);
    } else {
      body.append("size_1", e.target.size_1.checked ? "R" : null);
      body.append("size_2", e.target.size_2.checked ? "L" : null);
      body.append("size_3", e.target.size_3.checked ? "XL" : null);
    }

    addProduct(token, body)
      .then((res) => {
        var x = document.getElementById("snackbar-success");
        x.className = "show";
        setTimeout(function() {
          x.className = x.className.replace("show", "");
        }, 3000);
        setTimeout(() => {
          this.props.history.push(`/product/detail/${res.data.data.id}`);
        }, 3001);
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
        var x = document.getElementById("snackbar-fail");
        x.className = "show";
        setTimeout(function() {
          x.className = x.className.replace("show", "");
        }, 5000);
      });
  };

  render() {
    return (
      <div className="main">
        <Navbar />
        <div className="pref-link mb-5">
          <Link to="/" className="link">
            <p className="pref">Favorite&Promo </p> ||{" "}
            <p className="ProductName">Add new product</p>
          </Link>
        </div>
        <form className="forms" onSubmit={this.submitHandler}>
          <div className="form-left">
            <div className="product-image">
              <img
                src={this.state.newImage ? this.state.newImage : Camera}
                alt=""
              />
            </div>
            <button
              className="btn btn-dark"
              onClick={(e) => e.preventDefault()}
            >
              Take a picture
            </button>
            <input
              type="file"
              hidden
              ref={this.inputFile}
              onChange={this.selectedFile}
            />
            <button
              className="btn btn-warning chose"
              onClick={(e) => {
                this.inputFile.current.click();
                e.preventDefault();
              }}
            >
              Choose from gallery
            </button>
            <div className="delivery-hour">
              <p className="title">Delivery Hour :</p>
              Start
              <input
                type="time"
                name="start_delivery"
                className="form-control shadow-none"
              />
              End
              <input
                type="time"
                name="end_delivery"
                className="form-control shadow-none"
              />
            </div>
            <div className="input-stock">
              <p className="title">Input stock :</p>
              <input
                type="text"
                name="stock"
                className="form-control shadow-none"
                placeholder="stock"
              />
            </div>
          </div>
          <div className="form-right">
            <div className="mb-1">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name :
              </label>
              <input
                type="text"
                name="name"
                className="form-control shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Type product name min. 50 characters"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Price :
              </label>
              <input
                type="text"
                name="price"
                className="form-control shadow-none"
                id="exampleInputPassword1"
                placeholder="Type the price"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Description :
              </label>
              <input
                type="text"
                name="description"
                className="form-control shadow-none"
                id="exampleInputPassword1"
                placeholder="Describe your product min. 150 characters"
              />
            </div>
            <select
              onChange={(e) => this.setState({ category: e.target.value })}
              name="category"
              className="form-select end"
              aria-label="Default select example"
            >
              <option selected hidden disabled>
                Category
              </option>
              <option value="coffee">Coffee</option>
              <option value="non coffee">Non Coffee</option>
              <option value="food">Food</option>
            </select>
            <div className="input-size mb-5">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label mb-1"
              >
                Input product size :
              </label>
              <p className="description">
                Click size you want to use for this product
              </p>
              <div className="btn-chose">
                {this.state.category !== "food" ? (
                  <>
                    <input
                      type="checkbox"
                      className="btn-check shadow-none"
                      name="size_1"
                      id="size_1"
                      autoComplete="off"
                    />
                    <label className="btn btn-secondary" htmlFor="size_1">
                      R
                    </label>

                    <input
                      type="checkbox"
                      className="btn-check shadow-none"
                      name="size_2"
                      id="size_2"
                      autoComplete="off"
                    />
                    <label className="btn btn-secondary" htmlFor="size_2">
                      L
                    </label>

                    <input
                      type="checkbox"
                      className="btn-check shadow-none"
                      name="size_3"
                      id="size_3"
                      autoComplete="off"
                    />
                    <label className="btn btn-secondary" htmlFor="size_3">
                      XL
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      className="btn-check shadow-none"
                      name="size_1"
                      id="size_1"
                      autoComplete="off"
                    />
                    <label className="btn btn-secondary" htmlFor="size_1">
                      250gr
                    </label>
                    <input
                      type="checkbox"
                      className="btn-check shadow-none"
                      name="size_2"
                      id="size_2"
                      autoComplete="off"
                    />
                    <label className="btn btn-secondary" htmlFor="size_2">
                      300gr
                    </label>
                    <input
                      type="checkbox"
                      className="btn-check shadow-none"
                      name="size_3"
                      id="size_3"
                      autoComplete="off"
                    />
                    <label className="btn btn-secondary" htmlFor="size_3">
                      500gr
                    </label>
                  </>
                )}
              </div>
            </div>
            <div className="delivery-method">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label mb-1"
              >
                Delivery method :
              </label>
              <p className="describtion">
                Click method you want to use for this product
              </p>
              <div className="btn-chose">
                <input
                  type="checkbox"
                  className="btn-check shadow-none"
                  name="home_delivery"
                  id="home_delivery"
                  autoComplete="off"
                />
                <label className="btn btn-secondary" htmlFor="home_delivery">
                  Home Delivery
                </label>
                <input
                  type="checkbox"
                  className="btn-check shadow-none"
                  name="dine_in"
                  id="dine_in"
                  autoComplete="off"
                />
                <label className="btn btn-secondary" htmlFor="dine_in">
                  Dine in
                </label>
                <input
                  type="checkbox"
                  className="btn-check shadow-none"
                  name="take_away"
                  id="take_away"
                  autoComplete="off"
                />
                <label className="btn btn-secondary" htmlFor="take_away">
                  Take away
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary save">
              Save Product
            </button>
            <button
              className="btn btn-light cancel"
              onClick={(e) => {
                e.preventDefault();
                this.props.history.goBack();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
        <Footer />
        {/* TOAST */}
        <div id="snackbar-success">Product berhasil ditambahkan!</div>
        <div id="snackbar-fail">Terdapat kesalahan.</div>;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.auth.userData,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Add_product);
