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
        <div className="container mt-20 pt-5 transparent-dark">
          <h2 className="text-light font-monospace text-shadow">
            GAMING BUDDY
          </h2>
          <h4 className="text-shadow text-light mt-1">
            Create your gaming profile and search for your perfect gaming
            buddies
          </h4>
          <h2 className="text-light font-monospace text-shadow">
            CUSTOMIZED SEARCH
          </h2>
          <h4 className="text-shadow text-light mt-1">
            Plenty of options including Kd, loadout, game style, and more
          </h4>
          <h2 className="text-light font-monospace text-shadow">
            DEDICATED CHAT
          </h2>
          <h4 className="text-shadow text-light mt-1">
            Chat with your buddy to arrange a time to squad up
          </h4>
          <h2 className="text-light font-monospace text-shadow">
            MUCH MORE FEATURES
          </h2>
          <h4 className="text-shadow text-light mt-1">
            Login to discover all the amazing features of Gaming Buddy
          </h4>
        </div>
      </div>
      <LoginModal />
      <SignupModal />
    </Fragment>
  );
};

export default LoginPage;
