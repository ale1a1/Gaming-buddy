import React, { Fragment, useState } from "react";
import { UserRepository } from "../../libs/repository/UserRepository";
// import "./style.css";

const SignupModal = () => {
  const userRepository = new UserRepository();

  const blankSignupValues = {
    emailAddress: "",
    gamebuddyUsername: "",
    warzoneUsername: "",
    password: "",
  };

  const blankValidationErrors = {
    emailAddress: null,
    gamebuddyUsername: null,
    warzoneUsername: null,
  };

  const [signupValues, setSignupValues] = useState(blankSignupValues);

  const [validationErrors, setValidationErrors] = useState(
    blankValidationErrors
  );

  const emailAddressHandler = (event) => {
    setSignupValues((previousSignupValues) => {
      return { ...previousSignupValues, emailAddress: event.target.value };
    });
  };

  const gamebuddyUsernameHandler = (event) => {
    setSignupValues((previousSignupValues) => {
      return { ...previousSignupValues, gamebuddyUsername: event.target.value };
    });
  };

  const warzoneUsernameHandler = (event) => {
    setSignupValues((previousSignupValues) => {
      return { ...previousSignupValues, warzoneUsername: event.target.value };
    });
  };

  const passwordHandler = (event) => {
    setSignupValues((previousSignupValues) => {
      return { ...previousSignupValues, password: event.target.value };
    });
  };

  const signupHandler = (event) => {
    event.preventDefault();

    if (!userRepository.list().length) {
      userRepository.save(signupValues);
      // localStorage.setItem(
      //   "storedSignupValues",
      //   JSON.stringify([signupValues])
      // );
    } else {
      const storedSignupValues = JSON.parse(
        localStorage.getItem("storedSignupValues")
      );
    
      //PROVA AD USARE QUESTO...dava un errore...riprova
      //const storedSignupValues = userRepository.retrieve()
      const filteredLocalStorage = storedSignupValues.filter((item) => {
        if (item.emailAddress === signupValues.emailAddress) {
          setValidationErrors((previousValidationErrors) => {
            // event.preventDefault();
            return { ...previousValidationErrors, emailAddress: "error" };
          });
        } else {
          setValidationErrors((previousValidationErrors) => {
            return { ...previousValidationErrors, emailAddress: null };
          });
        }
        if (item.gamebuddyUsername === signupValues.gamebuddyUsername) {
          setValidationErrors((previousValidationErrors) => {
            // event.preventDefault();
            return { ...previousValidationErrors, gamebuddyUsername: "error" };
          });
        } else {
          setValidationErrors((previousValidationErrors) => {
            return { ...previousValidationErrors, gamebuddyUsername: null };
          });
        }
        if (item.warzoneUsername === signupValues.warzoneUsername) {
          setValidationErrors((previousValidationErrors) => {
            // event.preventDefault();
            return { ...previousValidationErrors, warzoneUsername: "error" };
          });
        } else {
          setValidationErrors((previousValidationErrors) => {
            return { ...previousValidationErrors, warzoneUsername: null };
          });
        }
        return (
          item.emailAddress === signupValues.emailAddress ||
          item.gamebuddyUsername === signupValues.gamebuddyUsername ||
          item.warzoneUsername === signupValues.warzoneUsername
        );
      });
      if (!filteredLocalStorage[0]) {
        storedSignupValues.push(signupValues);
        // userRepository.add(signupValues);
        //PROVA A USARE QUESTO...DAVA UN ERRORE....
          localStorage.setItem(
            "storedSignupValues",
            JSON.stringify(storedSignupValues)
          );
      }
    }
  };

  const closeHandler = () => {
    setValidationErrors(blankValidationErrors);
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="signupForm"
        tabIndex="-1"
        aria-labelledby="getOfferLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="getOfferLabel">
                SIGN UP
              </h5>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={signupHandler}>
                <div className="mb-3">
                  {validationErrors.emailAddress && (
                    <label className="col-form-label cssBold text-danger">
                      The email address you selected is already in use! Choose a
                      different one!
                    </label>
                  )}
                  {!validationErrors.emailAddress && (
                    <label className="col-form-label cssBold">
                      Email address:
                    </label>
                  )}
                  <input
                    type="email"
                    className="form-control"
                    name="Email address"
                    placeholder="Enter your email address"
                    onChange={emailAddressHandler}
                    value={signupValues.emailAddress}
                    required
                  />
                </div>
                <div className="mb-3">
                  {validationErrors.gamebuddyUsername && (
                    <label
                      className="col-form-label cssBold text-danger"
                      required
                    >
                      The gaming buddy username you selected is already in use!
                      Choose a different one!
                    </label>
                  )}
                  {!validationErrors.gamebuddyUsername && (
                    <label className="col-form-label cssBold" required>
                      Gaming Buddy username:
                    </label>
                  )}
                  <input
                    type="text"
                    className="form-control"
                    name="Gaming Buddy username"
                    placeholder="Create your Gaming Buddy username"
                    onChange={gamebuddyUsernameHandler}
                    value={signupValues.gamebuddyUsername}
                    required
                  />
                </div>
                <div className="mb-3">
                  {validationErrors.warzoneUsername && (
                    <label
                      className="col-form-label cssBold text-danger"
                      required
                    >
                      The warzone username you selected is already in use!
                      Choose a different one!
                    </label>
                  )}
                  {!validationErrors.warzoneUsername && (
                    <label className="col-form-label cssBold" required>
                      Warzone username:
                    </label>
                  )}
                  <input
                    type="text"
                    className="form-control"
                    name="Warzone username"
                    placeholder="Enter your Warzone username"
                    onChange={warzoneUsernameHandler}
                    value={signupValues.warzoneUsername}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label cssBold">Password:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Password"
                    placeholder="Create your password"
                    onChange={passwordHandler}
                    value={signupValues.password}
                    required
                  ></input>
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
                    Sign up
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

export default SignupModal;
