import React, { Component } from "react";
import "./Profile.scoped.css";

// COMPONENTS
import Header from "../../components/Navbar/navLog";
import Footer from "../../components/Footer/Footer";

// IMAGE
import Profile from "../../assets/images/dummy-profile.png";

export default class index extends Component {
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
                <button className="btn btn-warning chose">choose photo</button>
                <button className="btn btn-primary">Remove photo</button>
                <button className="btn btn-light">Edit password</button>
              </div>
              <p className="text">
                Do you want to save <br /> the change?
              </p>
            </div>

            <div className="second-btn">
              <button className="btn btn-warning chose">choose photo</button>
              <button className="btn btn-primary">Remove photo</button>
              <button className="btn btn-light">Edit password</button>
            </div>
            <div className="forms">
              <div className="form-left">
                <div className="contact">
                  <p>Contact</p>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address :
                      </label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Delivery adress :
                      </label>
                      <input type="text" class="form-control" id="exampleInputPassword1" />
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
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        First name :
                      </label>
                      <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Last name :
                      </label>
                      <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="form-right">
                <div class="mb-3 mobile-number">
                  <label for="exampleInputPassword1" class="form-label">
                    Mobile number :
                  </label>
                  <input type="text" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 dob">
                  <label for="exampleFormControlInput1" class="form-label">
                    DD/MM/YYYY:
                  </label>
                  <input type="date" class="form-control" date aria-label="YYYY/MM/DD" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
