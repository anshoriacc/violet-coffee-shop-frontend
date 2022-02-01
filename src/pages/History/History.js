import React, { Component } from "react";
import "./History.scoped.css";

// COMPONENTS
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardHistory from "../../components/CardHistory/CardHistory";

import Dumy from "../../assets/images/background-profile.jpg";

// import { Link } from "react-router-dom";
import { GetHistory } from "../../utils/history";
import { connect } from "react-redux";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userHistory: [],
      id: [],
    };
    this.inputFile = React.createRef();
  }

  fromChange = (e) => {
    const ids = [...this.state.id];
    ids.push(e.target.value);
    this.setState({ id: ids }, () => {
      console.log(this.state.id);
    });
  };

  getHistoryUser = () => {
    const token = this.props.token;
    GetHistory(token)
      .then((res) => {
        this.setState({ userHistory: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getHistoryUser();
  }

  render() {
    const userHistory = this.state.userHistory;
    return (
      <>
        <Header />
        <div className="background">
          <div className="content">
            <div className="section-title">
              <h1>Let's see what you have bought!</h1>
              <p>Select item to delete</p>
            </div>
            <div className="card-container">
              {userHistory.map((val) => {
                console.log(val.name);
                return <CardHistory image={Dumy} name={val.name} price={val.price} id={val.id} key={val.id} />;
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(History);
