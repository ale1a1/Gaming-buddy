import React, { Fragment } from "react";
import "./LoginPage.css";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";


const LoginPage = () => {
  return (
    <Fragment>
      <div className="loginPage">
        <button
          className="btn btn-outline-danger"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#loginForm"
          aria-controls="login"
        >
          LOGIN
        </button>
        <button
          className="btn btn-outline-primary"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#signupForm"
          aria-controls="signup"
        >
          SIGN UP
        </button>
      </div>
      <LoginModal />
      <SignupModal />
    </Fragment>
  );
};

export default LoginPage;
