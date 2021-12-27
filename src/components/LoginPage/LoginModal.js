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

  const blankValidationErrors = {
    gamebuddyUsername: null,
    password: null,
  };

  const [loginValues, setLoginValues] = useState(blankLoginValues);

  const [validationErrors, setValidationErrors] = useState(
    blankValidationErrors
  );

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
   
    event.preventDefault();
    const storedSignupValues = signupRepository.retrieve();

    const filteredLocalStorage = storedSignupValues.filter((item) => {
      if (item.gamebuddyUsername !== loginValues.gamebuddyUsername) {
        setValidationErrors((previousValidationErrors) => {
          // event.preventDefault();
          return { ...previousValidationErrors, gamebuddyUsername: "error" };
        });
      } else {
        setValidationErrors((previousValidationErrors) => {
          return { ...previousValidationErrors, gamebuddyUsername: null };
        });
      }
      if (item.password !== loginValues.password) {
        setValidationErrors((previousValidationErrors) => {
          // event.preventDefault();
          return { ...previousValidationErrors, password: "error" };
        });
      } else {
        setValidationErrors((previousValidationErrors) => {
          return { ...previousValidationErrors, password: null };
        });
      }
      return (
        item.gamebuddyUsername === loginValues.gamebuddyUsername &&
        item.password === loginValues.warzoneUsername
      );
    });
    console.log(filteredLocalStorage)
    console.log(storedSignupValues)
    console.log(loginValues)
    console.log(validationErrors)
    if (filteredLocalStorage[0]) {
      loginRepository.list();
      loginRepository.save("Logged in");
      alert("Logged in!");
    }
  };

  const closeHandler = () => {
    setValidationErrors(blankValidationErrors);
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
                {validationErrors.gamebuddyUsername && (
                    <label
                      className="col-form-label cssBold text-danger"
                      required
                    >
                      The gaming buddy username you selected is not recognised!
                      Try again!
                    </label>
                  )}
                  {!validationErrors.gamebuddyUsername && (
                    <label className="col-form-label cssBold" required>
                      Gaming Buddy username:
                    </label>
                  )}
                  {/* <label className="col-form-label cssBold">
                    Gaming Buddy username
                  </label> */}
                  <input
                    type="text"
                    className="form-control"
                    name="Gaming Buddy username"
                    placeholder="Insert your Gaming Buddy username"
                    onChange={gamebuddyUsernameHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                {validationErrors.gamebuddyUsername && (
                    <label
                      className="col-form-label cssBold text-danger"
                      required
                    >
                      The password you selected is not recognised!
                      Try again!
                    </label>
                  )}
                  {!validationErrors.gamebuddyUsername && (
                    <label className="col-form-label cssBold" required>
                      Password:
                    </label>
                  )}
                  {/* <label className="col-form-label cssBold" required>
                    Password:
                  </label> */}
                  <input
                    type="text"
                    className="form-control"
                    name="Password"
                    placeholder="Insert your password"
                    onChange={passwordHandler}
                    required
                  />
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-danger"
                    type="button"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
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
