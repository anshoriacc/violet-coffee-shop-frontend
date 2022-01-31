import React, { Component } from "react";
import "./History.scoped.css";

// COMPONENTS
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardHistory from "../../components/CardHistory/CardHistory";
import { Link } from "react-router-dom";

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyData: [],
    };
    this.inputFile = React.createRef();
  }

  render() {
    const historyData = this.state.historyData;

    return (
      <>
        <Header />
        <div className="background">
          <div className="content">
            <div className="section-title">
              <h1>Let's see what you have bought!</h1>
              <p>Select item to delete</p>
            </div>
            {historyData.length > 0 ? <p className="action">Delete</p> : <></>}
            <div className={historyData.length > 0 ? "history-tile" : ""}>
              {historyData.length > 0 ? (
                historyData.map((data) => <CardHistory historyData={data} />)
              ) : (
                <p className="no-data">
                  No transaction made. <Link to="/product">Make one now!</Link>
                </p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
