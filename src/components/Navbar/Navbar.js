import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.scoped.css"
import logo from "../../assets/icons/logo.png"
import chat from "../../assets/icons/chat (1) 1.png"
import profile from "../../assets/images/dummy-profile.png"

export default function Navbar(props) {
  const [isLogin] = useState(true)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand title-brand" to="#">
          <img
            src={logo}
            alt="logo"
            width="30"
            className="d-inline-block align-text-top img-logo"
          />
          Coffee Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Your Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                History
              </Link>
            </li>
          </ul>
          {!isLogin ? (
            <div className="d-flex">
              <Link to="/login" className="btn-login">
                Login
              </Link>

              <Link to="/signup" className="btn-signup">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="info">
              <div className="search">
                <input type="text" placeholder="Search" />
              </div>
              <div className="chat">
                <Link to="/">
                  <div className="notif">1</div>
                  <img src={chat} alt="chat" />
                </Link>
              </div>
              <div className="profilepic">
                <div className="img-profile">
                  <Link to="/">
                    <img src={profile} alt="profile" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>

    /* 

    navbar non login

<div class="d-flex">
            <Link className="btn-login">Login</Link>

            <button class="btn-signup" type="submit">
              Sign Up
            </button>
          </div>

*/

    /* 
.
    navbar login
    <div className="info">
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="chat">
            <a href="/">
              <img src={chat} alt="" />
              <div className="notif">1</div>
            </a>
          </div>
          <div className="profilepic">
            <div className="img-profile">
              <a href="/">
                <img src={profile} alt="" />
              </a>
            </div>
          </div>
        </div>


*/

    // <nav className="main navbar-expand-lg ">
    //   <div className="logo">
    //     <div className="icon">
    //       <img src={logo} alt="icon" />
    //     </div>
    //     <div className="text">
    //       <p>Coffee Shop</p>
    //     </div>
    //   </div>
    //   <div className="link">
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="/">
    //             Product
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="/">
    //             Your Cart
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="/">
    //             History
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="button">
    //     <div className="left">
    //       <button type="button" class="btn btn-light">
    //         Login
    //       </button>
    //     </div>
    //     <div className="right">
    //       <button type="button" class="btn btn-warning">
    //         Sign Up
    //       </button>
    //     </div>
    //   </div>
    // </nav>
  )
}
