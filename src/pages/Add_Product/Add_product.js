import React, { Component } from "react";
import "./Add_product.scoped.css";

import Navbar from "../../components/Navbar/NavLog";
import Footer from "../../components/Footer/Footer";

import Camera from "../../assets/icons/Camera.png";

export default class Add_product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputFile = React.createRef();
  }

  handleFile = (event) => {
    this.inputFile.current.click();
    event.preventDefault();
  };
  render() {
    return (
      <div className="main">
        <Navbar />
        <div className="pref-link mb-5">
          <a href="/" className="link">
            <p className="pref">Favorite&Promo </p> || <p className="ProductName">Add new product</p>
          </a>
        </div>
        <div className="forms">
          <div className="form-left">
            <div className="product-image">
              <img src={Camera} alt="" />
            </div>
            <button className="btn btn-dark">Take a picture</button>
            <input type="file" hidden ref={this.inputFile} />
            <button className="btn btn-warning chose" onClick={this.handleFile}>
              Choose from gallery
            </button>
            <div className="delivery-hour">
              <p className="title">Delivery Hour :</p>
              <select class="form-select start" aria-label="Default select example">
                <option selected>Select start hour</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select class="form-select end" aria-label="Default select example">
                <option selected>Select end hour</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="input-stock">
              <p className="title">Input stock :</p>
              <select class="form-select start" aria-label="Default select example">
                <option selected>Input stock</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="form-right">
            <form>
              <div class="mb-1">
                <label for="exampleInputEmail1" class="form-label">
                  Name :
                </label>
                <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type product name min. 50 characters" />
              </div>
              <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label">
                  Price :
                </label>
                <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Type the price" />
              </div>
              <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label">
                  Description :
                </label>
                <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Describe your product min. 150 characters" />
              </div>
            </form>
            <div className="input-size mb-5">
              <label for="exampleInputPassword1" class="form-label mb-1">
                Input product size :
              </label>
              <p className="describtion">Click size you want to use for this product</p>
              <div className="btn-chose">
                <input type="radio" class="btn-check shadow-none" name="options1" id="option1" autocomplete="off" />
                <label class="btn btn-secondary" for="option1">
                  R
                </label>

                <input type="radio" class="btn-check shadow-none" name="options2" id="option2" autocomplete="off" />
                <label class="btn btn-secondary" for="option2">
                  L
                </label>

                <input type="radio" class="btn-check shadow-none" name="options3" id="option3" autocomplete="off" />
                <label class="btn btn-secondary" for="option3">
                  XL
                </label>

                <input type="radio" class="btn-check shadow-none" name="options4" id="option4" autocomplete="off" />
                <label class="btn btn-secondary" for="option4">
                  250gr
                </label>
                <input type="radio" class="btn-check shadow-none" name="options5" id="option5" autocomplete="off" />
                <label class="btn btn-secondary" for="option5">
                  300gr
                </label>
                <input type="radio" class="btn-check shadow-none" name="options6" id="option6" autocomplete="off" />
                <label class="btn btn-secondary" for="option6">
                  500gr
                </label>
              </div>
            </div>
            <div className="delivery-method">
              <label for="exampleInputPassword1" class="form-label mb-1">
                Delivery method :
              </label>
              <p className="describtion">Click method you want to use for this product</p>
              <div className="btn-chose">
                <input type="radio" class="btn-check shadow-none" name="options7" id="option7" autocomplete="off" />
                <label class="btn btn-secondary" for="option7">
                  Home Delivery
                </label>
                <input type="radio" class="btn-check shadow-none" name="options8" id="option8" autocomplete="off" />
                <label class="btn btn-secondary" for="option8">
                  Dine in
                </label>
                <input type="radio" class="btn-check shadow-none" name="options9" id="option9" autocomplete="off" />
                <label class="btn btn-secondary" for="option9">
                  Take away
                </label>
              </div>
            </div>
            <button className="btn btn-primary save">Save Product</button>
            <button className="btn btn-light cancel">Cancel</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
