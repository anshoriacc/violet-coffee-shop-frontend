import React from "react"
import "./navbar.scoped.css"
import logo from "../../assets/icons/logo.png"
// import "bootstrap/"

export default function navbar() {
  return (
    <nav className="main navbar-expand-lg ">
      <div className="logo">
        <div className="icon">
          <img src={logo} alt="icon" />
        </div>
        <div className="text">
          <p>Coffee Shop</p>
        </div>
      </div>
      <div className="link">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Your Cart
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                History
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="button">
        <div className="left">
          <button type="button" class="btn btn-light">
            Login
          </button>
        </div>
        <div className="right">
          <button type="button" class="btn btn-warning">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}
