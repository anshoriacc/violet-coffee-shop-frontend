import React, { Component } from "react";
import "./Profile.scoped.css";
import { Modal } from "react-bootstrap";

// COMPONENTS
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// IMAGE
import Profile from "../../assets/images/dummy-profile.png";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
    this.inputFile = React.createRef();
  }

  handleFile = (event) => {
    this.inputFile.current.click();
    event.preventDefault();
  };

  modalTrigger = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    return (
      <div className="main">
        <Header />
        <div className="jumbotron">
          <h1 className="title">User Profile</h1>
          <div className="wrapper">
            <div className="profile">
              <img src={Profile} alt="" />
              <div className="name">
                <strong>Team Violet</strong>
                <br />
                violet@front.end
              </div>
              <div className="button">
                <input type="file" hidden ref={this.inputFile} />
                <button className="btn btn-warning chose" onClick={this.handleFile}>
                  choose photo
                </button>
                <button className="btn btn-primary">Remove photo</button>
                <button className="btn btn-light">Edit password</button>
              </div>
              <p className="text">
                Do you want to save <br /> the change?
              </p>
            </div>
            <div className="second-btn">
              <input type="file" hidden />
              <button className="btn btn-warning chose">Save Change</button>
              <button className="btn btn-primary">Cancel</button>
              <button className="btn btn-light" onClick={this.modalTrigger}>
                Log out
              </button>
            </div>
            <div className="forms">
              <div className="radio-input">
                <div class="form-check form-check-inline">
                  <input class="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label male-label" for="inlineRadio1">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline female">
                  <input class="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label female-label" for="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
              <div className="form-left">
                <div className="contact">
                  <p>Contact</p>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address :
                      </label>
                      <input type="email" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Delivery adress :
                      </label>
                      <input type="text" class="form-control shadow-none" id="exampleInputPassword1" />
                    </div>
                  </form>
                </div>
                <div className="detail">
                  <p>Detail</p>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Display name :
                      </label>
                      <input type="email" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        First name :
                      </label>
                      <input type="text" class="form-control shadow-none" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Last name :
                      </label>
                      <input type="text" class="form-control shadow-none" id="exampleInputPassword1" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="form-right">
                <div class="mb-3 mobile-number">
                  <label for="exampleInputPassword1" class="form-label">
                    Mobile number :
                  </label>
                  <input type="text" class="form-control shadow-none" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 dob">
                  <label for="exampleFormControlInput1" class="form-label">
                    DD/MM/YYYY:
                  </label>
                  <input type="date" class="form-control shadow-none" date aria-label="YYYY/MM/DD" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
        {/* MODAL */}
        <Modal show={this.state.isShow} centered>
          <Modal.Body className="modal-body">
            <p className="modal-text">Are you sure to Log Out ?</p>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <div className="modal-btn">
              <button className="btn btn-light" onClick={this.modalTrigger}>
                No
              </button>
              <button className="btn btn-warning">Yes</button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
