import React, { Component } from "react";
import "./index.scoped.css";

// COMPONENTS
import Header from "../../components/Navbar/navLog";
import Footer from "../../components/Footer/Footer";

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    );
  }
}
