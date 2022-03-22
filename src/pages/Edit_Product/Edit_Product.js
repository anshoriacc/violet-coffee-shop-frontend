import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Edit_Product.scoped.css";
import Navbar from "../../components/Navbar/NavLog";
import Footer from "../../components/Footer/Footer";
import { formater } from "../../helpers/formatNumber";
import {
  detailProduct,
  deleteProduct,
  updateProduct
} from "../../utils/product";
import imageDefault from "../../assets/images/no-image.jpg";
import ModalDelete from "../../components/Modal/ModalDelete";
import ModalEdit from "../../components/Modal/ModalEdit";
import ModalErrorEditProduct from "../../components/Modal/ModalErrorEditProduct";

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
      counter: 1,
      editSuccess: false,
      updateFailed: false,
      notNull: false,
      showModal: false,
      onDelete: false,
      deleteSuccess: false,
      inputName: "",
      inputPrice: "",
      inputDescription: ""
    };
  }

  componentDidMount() {
    detailProduct(this.props.match.params.id)
      .then((res) => {
        // console.log(res);
        // if (res.data.data)
        const photo = res.data.data.image;
        if (photo !== null && typeof photo !== "undefined" && photo !== "")
          this.setState({
            imageProduct: photo
          });
        this.setState({ dataProduct: { ...res.data.data } });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    const id = this.state.dataProduct.id;
    const token = this.props.token;
    // console.log("ID >>>", id);
    // console.log("TOKEN >>>", token);
    if (this.state.onDelete) {
      deleteProduct(id, token)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.setState({ deleteSuccess: true });
            setTimeout(() => {
              this.setState({
                deleteSuccess: false,
                showModal: false
              });
              this.props.history.push("/product");
            }, 2500);
          }
        })
        .catch((err) => console.log(err.response));
    }

    // if (this.state.editMode) {
    //   this.handleSave();
    // }
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

  handleSave = () => {
    const id = this.state.dataProduct.id !== null && this.state.dataProduct.id;
    const token = this.props.token;
    // console.log(id, token);
    const body = new FormData();
    if (this.state.selectedFile !== null) {
      console.log("HANDLE SAVE", this.state.selectedFile);
      body.append(
        "image",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    }
    if (this.state.inputName !== null && this.state.inputName !== "") {
      body.append("name", this.state.inputName);
    }
    // console.log("NOT NULL", this.state.inputName);
    if (this.state.inputPrice !== null) {
      body.append("price", this.state.inputPrice);
    }
    body.append("stock", this.state.counter);
    if (this.state.inputDescription !== null) {
      body.append("description", this.state.inputDescription);
    }
    // console.log("BODY", body.get("image"));

    updateProduct(id, token, body)
      .then((res) => {
        // console.log("RESPONSE UPDATE", res);
        this.setState({ editSuccess: true });

        setTimeout(() => {
          this.setState({
            editSuccess: false
          });
          this.props.history.push("/product");
        }, 2500);
      })
      .catch((err) => {
        console.log("RESPONSE ERROR UPDATE", err);
        this.setState({ updateFailed: true });
      });
  };

  render() {
    // console.log("PRODUCT >>>", this.state.dataProduct);
    const { name, category, price, description } = this.state.dataProduct;

    // console.log("DELETE SUCCESS", this.state.deleteSuccess);
    // console.log("INPUT NAME", this.state.inputName);
    // console.log("INPUT PRICE", this.state.inputPrice);
    // console.log("INPUT DESCRIPTION", this.state.inputDescription);
    return (
      <>
        <ModalDelete
          show={this.state.showModal}
          onClose={() => this.setState({ showModal: false, onDelete: false })}
          onDelete={() => this.setState({ onDelete: true })}
        />
        <ModalEdit show={this.state.editSuccess} />
        <ModalErrorEditProduct
          show={this.state.updateFailed}
          onClose={() => this.setState({ updateFailed: false })}
        />
        <Navbar />
        <div className={this.state.deleteSuccess ? "toast2-success" : "toast2"}>
          Delete Product Success
        </div>
        <div className={this.state.notNull ? "toast2-success" : "toast2"}>
          Tidak boleh kosong
        </div>

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
                    this.setState({ showModal: true });
                  }}>
                  <div className="icon-delete">
                    <i className="bi bi-trash3-fill icon-delete2" />
                  </div>
                </div>
                <div
                  className="wrapper-image"
                  onClick={this.state.editMode ? this.inputImage : null}>
                  <img
                    src={this.state.imageProduct}
                    alt="Img Product"
                    className="image-product"
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
                    <p
                      className={
                        !this.state.editMode ? "name-product" : "toast2"
                      }>
                      {name}
                    </p>
                    <div
                      className={
                        this.state.editMode ? "wrapper-input" : "toast2"
                      }>
                      <input
                        className="input-name"
                        placeholder="Name Product"
                        onChange={(e) => {
                          this.setState({ inputName: e.target.value });
                        }}
                      />
                    </div>
                    <p
                      className={
                        !this.state.editMode ? "price-product" : "toast2"
                      }>
                      {formater.format(price)}
                    </p>
                    <div
                      className={
                        this.state.editMode ? "wrapper-input" : "toast2"
                      }>
                      <input
                        className="input-price"
                        placeholder="Price Product"
                        onChange={(e) => {
                          this.setState({ inputPrice: e.target.value });
                        }}
                      />
                    </div>
                    <p
                      className={
                        !this.state.editMode ? "description-product" : "toast2"
                      }>
                      {description}
                    </p>
                    <div
                      className={
                        this.state.editMode ? "wrapper-input" : "toast2"
                      }>
                      <input
                        className="input-description"
                        placeholder="Description Product"
                        onChange={(e) => {
                          this.setState({
                            inputDescription: e.target.value
                          });
                        }}
                      />
                    </div>
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
                        <p className="icon-minus">-</p>
                      </div>
                      <p className="count">
                        {this.state.editMode
                          ? this.state.counter
                          : this.state.dataProduct.stock}
                      </p>
                      <div className="plus" onClick={this.addCount}>
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
                {!this.state.editMode ? (
                  <div
                    className="btn-editProduct "
                    onClick={() => {
                      this.setState({ editMode: !this.state.editMode });
                    }}>
                    <p className="title-btn-editProduct">Edit Product</p>
                  </div>
                ) : (
                  <div
                    className="btn-editProduct"
                    onClick={() => {
                      this.handleSave();
                    }}>
                    <p className="title-btn-editProduct">Save Changes</p>
                  </div>
                )}
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
