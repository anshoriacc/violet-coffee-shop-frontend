import React, { Component } from "react";
import "./History.scoped.css";

// COMPONENTS
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardHistory from "../../components/CardHistory/CardHistory";
// import { Link } from "react-router-dom";
import { GetHistory } from "../../utils/history";
import { connect } from "react-redux";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userHistory: [],
    };
    this.inputFile = React.createRef();
  }

  getHistoryUser = () => {
    const token = this.props.token;
    GetHistory(token)
      .then((res) => {
        const data = res.data.data;
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          const item = element.payment_item;
          for (let i = 0; i < item.length; i++) {
            const data = item[i];
            const product = data.product;
            this.setState({ userHistory: product });
          }
        }
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
    console.log("USER HISTORY", userHistory);
    return (
      <>
        <Header />
        <div className="background">
          <div className="content">
            <div className="section-title">
              <h1>Let's see what you have bought!</h1>
              <p>Select item to delete</p>
            </div>
            {userHistory.map((val) => {
              return <CardHistory image={val.image} name={val.name} price={val.price} />;
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

/* 

 {this.state.history.map((val) => {
              return <Card image={`${process.env.REACT_APP_HOST}/${val.image}`} name={val.vehicle} date={val.date} price={val.prepayment} status={val.status} rating={val.rating} key={val.id} />;
            })}

*/

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(History);
