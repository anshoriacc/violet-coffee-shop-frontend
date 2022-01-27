import React from "react";
import "./Footer.scoped.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/icons/logo.png";
import iconFacebook from "../../assets/icons/facebook.png";
import iconTwitter from "../../assets/icons/twitter.png";
import iconInstagram from "../../assets/icons/instagram.png";

function Footer() {
  return (
    <div className="footer">
      <footer className="container p-0">
        <section className="row row-content">
          <div className="col-lg-6 col-md-6 col-sm-12 col-one">
            <div className="col-lg-9 col-sm-12 tittle">
              <p className="title-footer">
                <img src={logo} alt="logo" className="img-logo" />
                Coffe Shop
              </p>
              <p className="body-footer">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>

              <div className="icon-footer col-5">
                <div className="wrapper-icon">
                  <img src={iconFacebook} alt="icon-fb" className="icon" />
                </div>
                <div className="wrapper-icon">
                  <img src={iconTwitter} alt="icon-twitter" className="icon" />
                </div>
                <div className="wrapper-icon">
                  <img src={iconInstagram} alt="icon-instagram" className="icon" />
                </div>
              </div>
              <p className="tag-footer">©2020CoffeeStore</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-two product">
            <ul className="body-col-right">
              <li>
                <p className="title-col-right">Product</p>
              </li>
              <li>Download</li>
              <li>Princing</li>
              <li>location</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-three engage">
            <ul className="body-col-right">
              <li>
                <p className="title-col-right">Engage</p>
              </li>
              <li>Coffee Shop ?</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
