import React, { Fragment, useState } from "react";
import { SignupRepository } from "../../libs/repository/SignupRepository";
import { LoginRepository } from "../../libs/repository/LoginRepository";
// import "./style.css";

const LoginModal = () => {
  const signupRepository = new SignupRepository();
  const loginRepository = new LoginRepository();

  const blankLoginValues = {
    gamebuddyUsername: "",
    password: "",
  };

  const [loginValues, setLoginValues] = useState(blankLoginValues);

  const gamebuddyUsernameHandler = (event) => {
    setLoginValues((previousLoginValues) => {
      return { ...previousLoginValues, gamebuddyUsername: event.target.value };
    });
  };

  const passwordHandler = (event) => {
    setLoginValues((previousLoginValues) => {
      return { ...previousLoginValues, password: event.target.value };
    });
  };

  const loginHandler = (event) => {
    const storedSignupValues = signupRepository.retrieve();

    const filteredLocalStorage = storedSignupValues.filter((item) => {
      return (
        item.gamebuddyUsername === loginValues.gamebuddyUsername &&
        item.password === loginValues.password
      );
    });
    if (filteredLocalStorage[0]) {
      loginRepository.save(loginValues.gamebuddyUsername);
      alert("Logged in!");
    } else {
      event.preventDefault();
      alert("User not found! Try again");
    }
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="loginForm"
        tabIndex="-1"
        aria-labelledby="getOfferLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="getOfferLabel">
                LOGIN
              </h5>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={loginHandler}>
                <div className="mb-3">
                  <label className="col-form-label cssBold">
                    Gaming Buddy username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Gaming Buddy username"
                    placeholder="Insert your Gaming Buddy username"
                    onChange={gamebuddyUsernameHandler}
                    value={loginValues.gamebuddyUsername}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label cssBold" required>
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="Password"
                    placeholder="Insert your password"
                    onChange={passwordHandler}
                    value={loginValues.password}
                    required
                  />
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-danger"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginModal;
