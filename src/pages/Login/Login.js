import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scoped.css";
import logo from "../../assets/icons/logo.png";
import iconGoogle from "../../assets/icons/google-logo-min.png";
import imageLeft from "../../assets/images/background-loginregister.jpg";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginAction, saveAction } from "../../Redux/actions/auth";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  formChange = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    console.log(this.state);
    this.setState(data);
  };

  setUser = (token) => {
    const URL = process.env.REACT_APP_HOST + "/user/profile";
    axios({
      url: URL,
      method: "GET",
      headers: { "x-access-token": token },
    })
      .then((res) => {
        const { result } = res.data;
        this.props.setUsers(result[0]);
        this.props.history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  login = () => {
    const URL = process.env.REACT_APP_HOST + "/auth/login";
    axios({
      url: URL,
      method: "POST",
      data: this.state,
    })
      .then((res) => {
        const { token } = res.data.result;
        this.props.setAuth(token);
        this.setUser(token);
      })
      .catch((err) => {
        console.log(err);
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function() {
          x.className = x.className.replace("show", "");
        }, 3000);
      });
  };

  // https://coffee-shop-back-end.herokuapp.com/api/

  render() {
    return (
      <>
        <main className="container-fluid p-0">
          <div className="row position-relative border">
            <section className="col-lg-6 col-md-6 content-left">
              <img src={imageLeft} alt="img-left" className="img-fluid img-left" />
            </section>
            <section className="col-lg-6 col-md-6 p-lg-5 content-right">
              <div className="row">
                <div className="col-lg-6 wrapper-title-coffee">
                  <p className="title-coffee">
                    <img src={logo} alt="logo-img" width={30} height={30} className="me-3" />
                    Coffee Shop
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 justify-content-center d-flex">
                  <button className="btn-signup">Sign Up</button>
                </div>
                <div className="col-lg-12 col-md-6 text-center ps-md-5 mt-lg-5 mb-lg-3 wrapper-title-login">
                  <p className="title-login">Login</p>
                </div>
                <div className="col-lg-6 col-md-6 justify-content-center d-flex wrapper-btn-signup">
                  <button className="btn-signup">Sign Up</button>
                </div>

                <div className="col-lg-8 col-md-2 d-flex flex-column wrapper-form">
                  <label className="label-form">Email Address :</label>
                  <input typeof="email" className="input-form" placeholder="Enter your email address" name="email" onChange={this.formChange} />
                  <label className="label-form">Password :</label>
                  <input type="password" className="input-form" placeholder="Enter your password" name="password" onChange={this.formChange} />
                  <Link className="link-forgot-password" to="/forgot-password">
                    Forgot Password
                  </Link>
                  <button className="btn-login" onClick={this.login}>
                    Login
                  </button>
                  <button className="btn-google">
                    <img src={iconGoogle} alt="icon-google" width={25} height={25} className="icon-google" /> Login with Google
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
                <p className="main-card ps-5">Let's join with our member and enjoy the deals.</p>
              </div>
              <div className="col-lg-3 col-md-5 ps-md-5 ps-lg-0">
                <button className="create-now">Create Now</button>
              </div>
            </div>
          </div>
          {/* TOAST */}
          <div id="snackbar">Password atau email salah</div>
          <Footer />
        </main>
      </>
    );
  }
}

const mapDispatchToPropps = (dispacth) => {
  return {
    setUsers: bindActionCreators(saveAction, dispacth),
    setAuth: bindActionCreators(loginAction, dispacth),
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.auth.userData,
    token: state.auth.token,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPropps
)(Login);
