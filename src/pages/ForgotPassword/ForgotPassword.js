import React, { useState } from "react"
import Footer from "../../components/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./ForgotPassword.scoped.css"
import { useDispatch } from "react-redux";
import {forgotPassword} from "../../Redux/actions/auth"
import { doForgotPassword } from "../../utils/auth";

function ForgotPassword() {
  const [email, setEmail]= useState("")
  const [isResult,setIsResult]=useState(false)
  const dispatch = useDispatch();

  const handleChangeEmail = (event) =>{
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  const handleForgot = async () => {
    const body ={
      email
    }
    try {
       const res = await doForgotPassword(body)
      console.log(res);
      setIsResult(true)
    } catch (error) {
      console.log(error);
      var x = document.getElementById("snackbar");
      console.log(x);
        x.className = "show";
        setTimeout(function() {
          x.className = x.className.replace("show", "");
        }, 3000);
    }
    
  };
  
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
                  onChange={handleChangeEmail}
                />
                <button className="btn btn-send" onClick={handleForgot}>Send</button>
              </div>
              {isResult?(<>
                <div className="col-lg-12  wrapper-resend">
                <div className="col-lg-5 col-md-8 col-sm-6">
                  <p className="title-resend-link">
                    silahkan cek email anda
                  </p>
                </div>
                </div>
              </>):null}


                {/* <button className="btn btn-resend-link">Resend Link</button>
                <p className="minute">01:54</p> */}
              
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* TOAST */}
      <div id="snackbar">Email Not Found</div>
    </>
  )
}

export default ForgotPassword
