import { BrowserRouter, Route, Switch } from "react-router-dom"

// Components
import Home from "./pages/Home/Home"
import SignUp from "./pages/SignUp/SignUp"
import Login from "./pages/Login/Login"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import Chat from "./pages/Chat/Chat"
import Profile from "./pages/Profile/Profile"

import React, { Component } from "react"

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/Forgot_password" component={ForgotPassword} />
          <Route path="/chat" component={Chat} />
          <Route path="/chat/detail" component={Chat} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    )
  }
}
