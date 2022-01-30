import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/404/NotFound";
import History from "./pages/History/History";
import Dashboard from "./pages/Dashboard/Dashboard";

import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/payment" component={Payment} /> */}
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/history" component={History} />
          <Route path="/chat" component={Chat} />
          <Route path="/chat/detail" component={Chat} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
