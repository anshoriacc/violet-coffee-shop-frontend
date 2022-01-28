import React, { Component } from "react";
import "./Chat.scoped.css";

// COMPONENTS
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ChatRoom from "../../components/ChatRoom/ChatRoom";

export default class Chat extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="background">
          <div className="content">
            <div
              className={`left-section ${
                this.props.location.pathname === "/chat/detail"
                  ? "left-section-hidden"
                  : ""
              }`}
            >
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
              <div className="staff-list">
                <div className="staff-item">
                  <img
                    src={require("../../assets/images/background-chat.jpg")}
                    alt="user"
                  />
                  <div className="staff-content">
                    <p className="staff-name">Jason</p>
                    <p className="staff-message">
                      Hey, I'm Jason, Let's talk and share what's on your
                      thoughts!
                    </p>
                  </div>
                </div>
                <hr />
                <div className="staff-item">
                  <img
                    src={require("../../assets/images/background-chat.jpg")}
                    alt="user"
                  />
                  <div className="staff-content">
                    <p className="staff-name">Cheryn</p>
                    <p className="staff-message">
                      Hey, I'm Cheryn, can I help you? Just chat me if you have
                      some trouble in ordering, happy shopping!
                    </p>
                  </div>
                </div>
                <hr />
                <div className="staff-item">
                  <img
                    src={require("../../assets/images/background-chat.jpg")}
                    alt="user"
                  />
                  <div className="staff-content">
                    <p className="staff-name">Lou</p>
                    <p className="staff-message">
                      Hey, I'm Lou, I'll here to help you, just talk to me and
                      we solve the problem. Have a good day!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {this.props.location.pathname === "/chat" ? (
              <div className="right-section">
                <p className="section-title">Room Chat</p>
                <div className="chat-list">
                  <div
                    className="chat-item"
                    onClick={() => this.props.history.push("/chat/detail")}
                  >
                    <img
                      src={require("../../assets/images/background-chat.jpg")}
                      alt="user"
                    />
                    <div className="chat-content">
                      <div className="chat-user-time">
                        <p className="chat-user">Jason</p>
                        <p className="chat-time">02.14 PM</p>
                      </div>
                      <p className="chat-message">
                        Hey jason, I can’t find the promo section. Can u tell me
                        where is it?
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            ) : (
              <ChatRoom />
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
