import React, { Component } from "react"
import "./SignUp.scoped.css"

import banner from "../../assets/images/login-signup.jpeg"
import logo from "../../assets/icons/logo.png"
import google from "../../assets/icons/google-logo-min.png"

// components
import Footer from "../../components/Footer/Footer"

export default class index extends Component {
  render() {
    return (
      <div className="main">
        <div className="forms">
          <div className="left-container">
            <img src={banner} alt="" />
          </div>
          <div className="right-container">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Coffee Shop</p>
            </div>
            <div className="button">
              <a href="/">
                <button className="btn btn-warning">Login</button>
              </a>
            </div>
            <h1 className="tittle">Sign Up</h1>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address :
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email address"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Phone Number :
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your Phone number"
                />
              </div>
            </form>
            <div className="button-container">
              <button className="btn btn-warning">Sign Up</button>
              <button className="btn btn-light">
                <img src={google} alt="" /> Sign up with Google
              </button>
            </div>
          </div>
        </div>
        <div className="fly">
          <div className="text">
            <h2>
              Get your member <br /> card now!
            </h2>
            <p>Let's join with our member and enjoy the deals.</p>
          </div>
          <div className="create">
            <a href="/">
              <button className="btn btn-warning ">Create now</button>
            </a>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    )
  }
}
