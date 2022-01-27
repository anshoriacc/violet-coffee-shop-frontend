import React, { Component } from "react";
import "./Chat.scoped.css";

// COMPONENTS
import Header from "../../components/Navbar/navLog";
import Footer from "../../components/Footer/Footer";

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="background">
          <div className="content">
            <div className="left-section">
              <form className="search-bar">
                <button type="submit" className="search-button">
                  Search
                </button>
                <input
                  name="keyword"
                  type="search"
                  className="search-input"
                  placeholder="Search Chat"
                />
              </form>
              <p className="text-choose">
                Choose a staff you want to talk with
              </p>
              <div className="chat-list">
                <div className="chat-item">
                  <img
                    src={require("../../assets/images/background-chat.jpg")}
                    alt="user"
                  />
                  <div className="chat-content">
                    <p className="chat-user">Jason</p>
                    <p className="chat-message">
                      Hey, I'm Jason, Let's talk and share what's on your
                      thoughts!
                    </p>
                  </div>
                </div>
                <hr />
                <div className="chat-item">
                  <img
                    src={require("../../assets/images/background-chat.jpg")}
                    alt="user"
                  />
                  <div className="chat-content">
                    <p className="chat-user">Cheryn</p>
                    <p className="chat-message">
                      Hey, I'm Cheryn, can I help you? Just chat me if you have
                      some trouble in ordering, happy shopping!
                    </p>
                  </div>
                </div>
                <hr />
                <div className="chat-item">
                  <img
                    src={require("../../assets/images/background-chat.jpg")}
                    alt="user"
                  />
                  <div className="chat-content">
                    <p className="chat-user">Lou</p>
                    <p className="chat-message">
                      Hey, I'm Lou, I'll here to help you, just talk to me and
                      we solve the problem. Have a good day!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-room" />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
