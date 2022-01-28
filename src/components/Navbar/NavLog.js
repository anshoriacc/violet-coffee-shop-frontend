import React from "react";
import logo from "../../assets/icons/logo.png";
import "./NavLog.scoped.css";
import chat from "../../assets/icons/chat (1) 1.png";
import profile from "../../assets/images/dummy-profile.png";

export default function navLog() {
  return (
    <>
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
                <a class="nav-link" href="/product">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Your Cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/history">
                  History
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="info">
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="chat">
            <a href="/chat">
              <img src={chat} alt="" />
              <div className="notif">1</div>
            </a>
          </div>
          <div className="profilepic">
            <div className="img-profile">
              <a href="/profile">
                <img src={profile} alt="" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
