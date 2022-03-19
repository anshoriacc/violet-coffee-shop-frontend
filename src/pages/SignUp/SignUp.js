import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.scoped.css";
import logo from "../../assets/icons/logo.png";
import iconGoogle from "../../assets/icons/google-logo-min.png";
import imageLeft from "../../assets/images/background-loginregister.jpg";
import { Link } from "react-router-dom";

import axios from "axios";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phone: ""
    };
  }

  formChange = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    console.log(this.state);
    this.setState(data);
  };

  signup = () => {
    const URL = "https://coffee-shop-back-end.herokuapp.com/api/auth/signup";
    console.log("DATA BODY", this.state);
    axios({
      url: URL,
      method: "POST",
      data: this.state
    })
      .then((res) => {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function() {
          x.className = x.className.replace("show", "");
        }, 3000);
        setTimeout(() => {
          this.props.history.push("/login");
        }, 3001);
      })
      .catch((err) => {
        console.log("ERROR", err);
        var x = document.getElementById("toast");
        x.className = "show";
        setTimeout(function() {
          x.className = x.className.replace("show", "");
        }, 5000);
      });
  };
  render() {
    console.log(this.props);
    return (
      <>
        <main className="container-fluid p-0">
          <div className="row position-relative border">
            <section className="col-lg-6 col-md-6 content-left">
              <img
                src={imageLeft}
                alt="img-left"
                className="img-fluid img-left"
              />
            </section>
            <section className="col-lg-6 col-md-6 p-lg-4 content-right">
              <div className="row">
                <div className="col-lg-6 wrapper-title-coffee">
                  <p className="title-coffee">
                    <img
                      src={logo}
                      alt="logo-img"
                      width={30}
                      height={30}
                      className="me-3"
                    />
                    Coffee Shop
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 justify-content-end d-flex">
                  <Link to="/login">
                    <button className="btn-signup">Login</button>
                  </Link>
                </div>
                <div className="col-lg-12 col-md-6 text-center ps-md-5 mt-lg-5 mb-lg-3 wrapper-title-login">
                  <p className="title-login">Sign Up</p>
                </div>
                <div className="col-lg-6 col-md-6 justify-content-center d-flex wrapper-btn-signup">
                  <button className="btn-signup">Login</button>
                </div>

                <div className="col-lg-8 col-md-2 d-flex flex-column wrapper-form">
                  <label className="label-form">Email Address :</label>
                  <input
                    typeof="email"
                    className="input-form"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={this.formChange}
                  />
                  <label className="label-form">Password :</label>
                  <input
                    type="password"
                    className="input-form"
                    placeholder="Enter your password"
                    name="password"
                    onChange={this.formChange}
                  />
                  <label className="label-form">Phone Number :</label>
                  <input
                    typeof="text"
                    className="input-form"
                    placeholder="Enter your phone number"
                    name="phone"
                    onChange={this.formChange}
                  />

                  <button className="btn-login" onClick={this.signup}>
                    Sign Up
                  </button>
                  <button className="btn-google">
                    <img
                      src={iconGoogle}
                      alt="icon-google"
                      width={25}
                      height={25}
                      className="icon-google"
                    />{" "}
                    Sign Up with Google
                  </button>
                </div>
              </div>
            </section>
            <div className="row card" id="card">
              <div className="col-9 wrapper-title-card">
                <div className="row">
                  <div className="col-lg-5 wrapper-title ms-5">
                    <h1 className="title-card">Get your member card now!</h1>
                  </div>
                </div>
                <p className="main-card ps-5">
                  Let's join with our member and enjoy the deals.
                </p>
              </div>
              <div className="col-lg-3 col-md-5 ps-md-5 ps-lg-0">
                <button className="create-now">Create Now</button>
              </div>
            </div>
          </div>
          {/* <div id="toast-success">Sign Up Successfuly</div>
          <div id="toast-failed">
            Please fill in the correct / Cannot be empty
          </div> */}
          <Footer />
          {/* TOAST */}
          <div id="snackbar">Sign Up berhasil,Silahkan Login</div>
          <div id="toast">Sign Up gagal,silahkan coba kembali</div>;
        </main>
      </>
    );
  }
}

export default SignUp;
