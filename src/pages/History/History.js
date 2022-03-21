import React, {Component} from 'react';
import './History.scoped.css';
import {Modal} from 'react-bootstrap';

// COMPONENTS
import Header from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CardHistory from '../../components/CardHistory/CardHistory';

import Dumy from '../../assets/images/background-profile.jpg';

// import { Link } from "react-router-dom";
import {deleteHistory, getHistory} from '../../utils/history';
import {connect} from 'react-redux';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userHistory: [],
      id: 0,
      modalVisibility: false,
    };
    // this.inputFile = React.createRef();
  }

  // formChange = (id) => {
  //   const ids = [...this.state.id];
  //   ids.push(id);
  //   this.setState({id: ids}, () => {
  //     console.log(this.state.id);
  //   });
  // };

  deletePrompt = () => {
    deleteHistory(this.props.token, this.state.id)
      .then((res) => {
        // console.log(res);
        let x = document.getElementById('snackbar');
        x.className = 'show';
        setTimeout(function() {
          x.className = x.className.replace('show', '');
        }, 3000);
      })
      .catch((err) => {
        console.log({err});
      });
  };

  getHistoryUser = () => {
    const token = this.props.token;
    getHistory(token)
      .then((res) => {
        this.setState({userHistory: res.data.data});
      })
      .catch((err) => {
        console.log({err});
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
              {this.state.userHistory.length > 0 ? (
                <>
                  <h1>Let's see what you have bought!</h1>
                  <p>Select item to delete</p>
                </>
              ) : (
                <>
                  <h1>No history found. start order one!</h1>
                </>
              )}
            </div>
            <div className="card-container">
              {userHistory.map((val) => {
                console.log(val.name);
                return (
                  <CardHistory
                    image={Dumy}
                    name={val.name}
                    price={val.price}
                    id={val.id}
                    key={val.id}
                    onClick={() => {
                      this.setState({id: val.id});
                      this.setState({modalVisibility: true});
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
        {/* MODAL */}
        <Modal show={this.state.modalVisibility} centered>
          <Modal.Body className="modal-body">
            <p className="modal-text">
              Are you sure want to delete this transaction?
            </p>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <div className="modal-btn">
              <button className="btn btn-warning" onClick={this.deletePrompt}>
                Yes
              </button>
              <button
                className="btn btn-light"
                onClick={() =>
                  this.setState({modalVisibility: !this.state.modalVisibility})
                }
              >
                No
              </button>
            </div>
          </Modal.Footer>
        </Modal>
        <div id="snackbar">Berhasil delete transaction</div>
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
