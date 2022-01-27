import React, { Component } from "react"
import Footer from "../../components/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.scoped.css"
import logo from "../../assets/icons/logo.png"
import iconGoogle from "../../assets/icons/google-logo-min.png"
import imageLeft from "../../assets/images/background-loginregister.jpg"
import { Link } from "react-router-dom"

export class Login extends Component {
  render() {
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
            <section className="col-lg-6 col-md-6 p-lg-5 content-right">
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
                  <input
                    typeof="email"
                    className="input-form"
                    placeholder="Enter your email address"
                  />
                  <label className="label-form">Password :</label>
                  <input
                    type="password"
                    className="input-form"
                    placeholder="Enter your password"
                  />
                  <Link className="link-forgot-password" to="/forgot-password">
                    Forgot Password
                  </Link>
                  <button className="btn-login">Login</button>
                  <button className="btn-google">
                    <img
                      src={iconGoogle}
                      alt="icon-google"
                      width={25}
                      height={25}
                      className="icon-google"
                    />{" "}
                    Login with Google
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
          <Footer />
        </main>
      </>
    )
  }
}

export default Login
