import React from "react"
import Footer from "../../components/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./ForgotPassword.scoped.css"

function ForgotPassword() {
  return (
    <>
      <div className="container-fluid wrapper-content">
        <div className="row">
          <div className="col-lg-12 content">
            <h1 className="title-forgot">Forgot your password? </h1>
            <p className="caption">Don’t worry, we got your back!</p>
            <div>
              <div className="wrapper-input">
                <input
                  className="input-email"
                  typeof="text"
                  placeholder="Enter your email address to get link"
                />
                <button className="btn btn-send">Send</button>
              </div>
              <div className="col-lg-12  wrapper-resend">
                <div className="col-lg-5 col-md-8 col-sm-6">
                  <p className="title-resend-link">
                    click here if you didn't receive any link in 2 minutes
                  </p>
                </div>

                <button className="btn btn-resend-link">Resend Link</button>
                <p className="minute">01:54</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ForgotPassword
