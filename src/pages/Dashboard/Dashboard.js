import React, { Component } from "react";
import "./Dashboard.scoped.css";

import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="background">
          <div className="content">
            <h1>Let's see what you have bought!</h1>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
