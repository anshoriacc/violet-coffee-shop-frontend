import React, { Component } from "react"
import Footer from "../../components/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.scoped.css"
import logo from "../../assets/icons/logo.png"
import iconGoogle from "../../assets/icons/google-logo-min.png"
import imageLeft from "../../assets/images/background-loginregister.jpg"

export class Login extends Component {
  render() {
    return (
      <>
        <main className="container-fluid p-0">
          <div className="row position-relative">
            <section className="col-lg-6">
              <img src={imageLeft} alt="img-left" className="img-fluid" />
            </section>
            <section className="col-lg-6 p-5">
              <div className="row">
                <div className="col-lg-6">
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
                <div className="col-lg-6 justify-content-center d-flex">
                  <button className="btn-signup">Sign Up</button>
                </div>
                <div className="col-lg-12 text-center mt-5 mb-3">
                  <p className="title-login">Login</p>
                </div>

                <div className="col-lg-8 d-flex flex-column m-auto">
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
                  <a href="#" className="link-forgot-password">
                    Forgot Password ?
                  </a>
                  <button className="btn-login">Login</button>
                  <button className="btn-google">
                    <img
                      src={iconGoogle}
                      alt="icon-google"
                      width={30}
                      height={30}
                    />{" "}
                    Login with Google
                  </button>
                </div>
              </div>
            </section>
            <div className="row card">
              <div className="col-lg-9 ">
                <div className="row">
                  <div className="col-lg-5 ms-5">
                    <h1 className="title-card">Get your member card now!</h1>
                  </div>
                </div>
                <p className="main-card ps-5">
                  Let's join with our member and enjoy the deals.
                </p>
              </div>
              <div className="col-lg-3">
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
