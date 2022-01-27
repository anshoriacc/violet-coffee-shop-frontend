import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Components
import SignUp from "./pages/signUp/signup";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile";

import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/chat" component={Chat} />
          <Route path="/chat/detail" component={Chat} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    );
  }
}
