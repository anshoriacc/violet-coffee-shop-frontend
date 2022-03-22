import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Store from "./Redux/store";

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
import Payment from "./pages/Payment&Delivery/Payment";
import AddProduct from "./pages/Add_Product/Add_product";
import Detail from "./pages/Product_Detail/Product_detail";
import Product from "./pages/Product/Product";
import addPromo from "./pages/Promo/addPromo";
import EditProduct from "./pages/Edit_Product/Edit_Product";
import EditPromo from './pages/Promo/EditPromo';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default class Main extends Component {
  state = {
    token: ""
  };

  componentDidMount() {
    const state = JSON.parse(localStorage.getItem("state"));
    if (state) this.setState({ token: state.auth });
  }

  render() {
    const state = JSON.parse(localStorage.getItem("state"));
    const accessToken = state ? state.auth.token : null;

    return (
      <BrowserRouter>
        <ReduxProvider store={Store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route
              path="/signup"
              render={(routerProps) => {
                if (accessToken) return <Redirect from="/signup" to="/" />;
                return <SignUp {...routerProps} />;
              }}
            />
            <Route
              path="/login"
              render={(routerProps) => {
                if (accessToken) return <Redirect from="/login" to="/" />;
                return <Login {...routerProps} />;
              }}
            />
            <Route
              path="/product/payment"
              render={(routerProps) => {
                if (!accessToken)
                  return <Redirect from="/product/payment" to="/" />;
                return <Payment {...routerProps} />;
              }}
            />
            <Route
              path="/product/add"
              render={(routerProps) => {
                if (!accessToken)
                  return <Redirect from="/product/add" to="/" />;
                return <AddProduct {...routerProps} />;
              }}
            />
            <Route
              path="/product/detail/:id"
              render={(routerProps) => {
                if (!accessToken)
                  return <Redirect from="/product/detail/:id" to="/" />;
                return <Detail {...routerProps} />;
              }}
            />
            <Route
              path="/product/edit/:id"
              render={(routerProps) => {
                if (!accessToken)
                  return <Redirect from="/product/edit/:id" to="/" />;
                return <EditProduct {...routerProps} />;
              }}
            />
            <Route
              path="/product/:category"
              render={(routerProps) => {
                return <Product {...routerProps} />;
              }}
            />
            {/* <Route exact path="/product/:category" component={Product} /> */}
            <Route
              path="/forgot_password"
              render={(routerProps) => {
                if (accessToken)
                  return <Redirect from="/forgot_password" to="/" />;
                return <ForgotPassword {...routerProps} />;
              }}
            />
            <Route
              path="/history"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/history" to="/" />;
                return <History {...routerProps} />;
              }}
            />
            <Route
              path="/chat"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/chat" to="/" />;
                return <Chat {...routerProps} />;
              }}
            />
            <Route
              path="/chat/detail"
              render={(routerProps) => {
                if (!accessToken)
                  return <Redirect from="/chat/detail" to="/" />;
                return <Chat {...routerProps} />;
              }}
            />
            <Route
              path="/profile"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/profile" to="/" />;
                return <Profile {...routerProps} />;
              }}
            />
            <Route
              path="/admin/dashboard"
              render={(routerProps) => {
                if (!accessToken)
                  return <Redirect from="/admin/dashboard" to="/" />;
                return <Dashboard {...routerProps} />;
              }}
            />
            <Route path="/promo/add" component={addPromo} />
            <Route
              path="/promo/edit"
              // render={(routerProps) => {
              //   if (!accessToken) return <Redirect from='/promo/edit' to='/' />;
              //   return <EditPromo {...routerProps} />;
              // }}
              component={EditPromo}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </ReduxProvider>
      </BrowserRouter>
    );
  }
}
