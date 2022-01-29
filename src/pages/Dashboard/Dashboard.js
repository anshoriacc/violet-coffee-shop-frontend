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
              
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
