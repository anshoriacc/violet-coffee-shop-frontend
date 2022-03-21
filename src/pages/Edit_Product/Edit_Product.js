import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Edit_Product.scoped.css";
import Navbar from "../../components/Navbar/NavLog";
import Footer from "../../components/Footer/Footer";
import { formater } from "../../helpers/formatNumber";
import { detailProduct } from "../../utils/product";
import imageDefault from "../../assets/images/no-image.jpg";

class Edit_Product extends Component {
  constructor(props) {
    super(props);
    this.inputFileRef = createRef();
    this.onFileChange = this.handleFileChange.bind(this);
    this.onBtnClick = this.inputImage.bind(this);
    this.state = {
      dataProduct: {},
      selectedFile: null,
      imageProduct: imageDefault,
      editMode: false,
      counter: 1
    };
  }

  componentDidMount() {
    detailProduct(3)
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
    }
  };

  getBase64(e) {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        imageProduct: reader.result
      });
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  }

  handleFileChange(e) {
    this.getBase64(e);
    this.setState({
      selectedFile: e.target.files[0]
    });
  }

  inputImage = (e) => {
    this.inputFileRef.current.click();
  };

  render() {
    console.log("PRODUCT >>>", this.state.dataProduct);
    const {
      name,
      category,
      image,
      id,
      price,
      stock,
      description
    } = this.state.dataProduct;
    const role = this.props.users.role;
    console.log("ROLE", role);
    console.log("SELECTED IMAGE", this.state.selectedFile);
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12  mt-5 mb-5 d-lg-flex align-items-center ps-lg-5 pe-lg-0">
              {Object.keys(this.state.dataProduct).length !== 0 ? (
                <>
                  <Link
                    className="category-breadcrumb"
                    to={
                      category === "food"
                        ? "/product/food"
                        : category === "non coffee"
                        ? "/product/non+coffee"
                        : category === "coffee"
                        ? "/product/coffee"
                        : "/product"
                    }>
                    <p className="category-breadcrumb">
                      {category === null
                        ? "Favorite & Promo"
                        : category === "coffee"
                        ? "Coffee"
                        : category === "non coffee"
                        ? "Non Coffee"
                        : category === "food"
                        ? "Food"
                        : null}
                    </p>
                  </Link>

                  <p className="breadcrumb">
                    <i className="bi bi-chevron-right icon" />
                    {name} <i className="bi bi-chevron-right" />
                    Edit Product
                  </p>
                </>
              ) : (
                <p className="isLoading">Loading ...</p>
              )}
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-lg-5 ps-lg-5 pe-lg-5 d-flex justify-content-center position-relative ">
                <div
                  className="wrapper-icon-delete"
                  onClick={() => {
                    alert("DELETE PRODUCT");
                  }}>
                  <div className="icon-delete">
                    <i class="bi bi-trash3-fill icon-delete2" />
                  </div>
                </div>
                <div className="wrapper-image">
                  <img
                    src={this.state.imageProduct}
                    alt="Img Product"
                    className="image-product"
                    onClick={this.inputImage}
                  />
                  <input
                    type="file"
                    name="image"
                    id="image"
                    ref={this.inputFileRef}
                    multiple={false}
                    onChange={this.onFileChange}
                    hidden
                  />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5  wrapper-form">
                {Object.keys(this.state.dataProduct).length !== 0 ? (
                  <>
                    <p className="name-product">{name}</p>
                    <p className="price-product">{formater.format(price)}</p>
                    <p className="description-product">{description}</p>
                  </>
                ) : (
                  <p className="isLoading">Loading ...</p>
                )}

                <div className="wrapper-dropdown">
                  <select className="select">
                    <option value="" className="options-dropwdown">
                      Select Size
                    </option>
                    <option value="Option 2">R</option>
                    <option value="Option 3">L</option>
                    <option value="Option 4">XL</option>
                  </select>
                </div>

                <div className="wrapper-dropdown">
                  <select className="select">
                    <option value="" className="options-dropwdown">
                      Select Delivery Method
                    </option>
                    <option value="Option 2">Dine In</option>
                    <option value="Option 3">Door Delivery</option>
                    <option value="Option 4">Pick Up</option>
                  </select>
                </div>

                <div className="row mb-lg-4">
                  <div className="col-lg-3">
                    <div className="counter">
                      <div className="minus" onClick={this.minusCount}>
                        {/* <i class="bi bi-dash-lg" /> */}
                        <p className="icon-minus">-</p>
                      </div>
                      <p className="count">{this.state.counter}</p>
                      <div className="plus" onClick={this.addCount}>
                        {/* <i class="bi bi-plus-lg" /> */}
                        <p className="icon-plus">+</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <div className="btn-addCart">
                      <p className="title-btn-addCart">Add to cart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-5 ps-lg-5 pe-lg-5 ">
                <p className="title-date">
                  Delivery only on <b>Monday to</b>{" "}
                  <br className="title-date" /> <b>friday</b> at <b>1 - 7 pm</b>
                </p>
              </div>
              <div className="col-lg-7 ps-lg-5 wrapper-btn-editProduct">
                <div className="btn-editProduct ">
                  <p className="title-btn-editProduct">Edit Product</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.auth.userData,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Edit_Product);
