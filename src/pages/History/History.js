import React, { Component } from "react";
import "./History.scoped.css";

// COMPONENTS
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardHistory from "../../components/CardHistory/CardHistory";

export default class History extends Component {
  render() {
    const arr = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5];
    arr.length = 15;

    return (
      <>
        <Header />
        <div className="background">
          <div className="content">
            <div className="section-title">
              <h1>Let's see what you have bought!</h1>
              <p>Long press to delete item</p>
            </div>
            <div className="history-tile">
                
              {arr.map(() => (
                <CardHistory />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
