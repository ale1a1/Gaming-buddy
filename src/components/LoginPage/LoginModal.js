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
    const storedSignupValues = signupRepository.retrieve();

    const filteredLocalStorage = storedSignupValues.filter((item) => {
      if (item.gamebuddyUsername === loginValues.gamebuddyUsername) {
        setValidationErrors((previousValidationErrors) => {
          return { ...previousValidationErrors, gamebuddyUsername: null };
        });
      } else {
        setValidationErrors((previousValidationErrors) => {
          return { ...previousValidationErrors, gamebuddyUsername: "error" };
        });
      }
      if (item.password === loginValues.password) {
        setValidationErrors((previousValidationErrors) => {
          return { ...previousValidationErrors, password: null };
        });
      } else {
        setValidationErrors((previousValidationErrors) => {
          return { ...previousValidationErrors, password: "error" };
        });
      }
      return (
        item.gamebuddyUsername === loginValues.gamebuddyUsername &&
        item.password === loginValues.password
      );
    });
    if (filteredLocalStorage[0]) {
      loginRepository.list();
      if (loginRepository.list().length < 1) {
        loginRepository.save("Logged in");
      }
      alert("Logged in!");
      setValidationErrors(blankValidationErrors);
    } else {
      event.preventDefault();
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
                    value={loginValues.gamebuddyUsername}
                    required
                  />
                </div>
                <div className="mb-3">
                  {validationErrors.gamebuddyUsername && (
                    <label
                      className="col-form-label cssBold text-danger"
                      required
                    >
                      The password you selected is not recognised! Try again!
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
                    value={loginValues.password}
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
