import React, { Fragment, useState } from "react";
// import "./style.css";

const SignupModal = () => {
  const blankSignupValues = {
    emailAddress: "",
    gamebuddyUsername: "",
    warzoneUsername: "",
    password: "",
  };

  const [signupValues, setSignupValues] = useState(blankSignupValues);

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
    if (!JSON.parse(localStorage.getItem("storedSignupValues"))) {
      localStorage.setItem(
        "storedSignupValues",
        JSON.stringify([signupValues])
      );
    } else {
      const storedSignupValues = JSON.parse(
        localStorage.getItem("storedSignupValues")
      );
      // il map giu serve per controllare che i parametri dello state non siano gia nello storage...
      //metti un "if non ci sono" continui il code di giu, "if ci sono" dai un alert error message
      const valuesChecker = (item) => {
        if (item.emailAddress === signupValues.emailAddress) {
          return alert("email already in use");
        }
        if (item.gamebuddyUsername === signupValues.gamebuddyUsername) {
          return alert("gamebuddyUsername already in use");
        }
        if (item.warzoneUsername === signupValues.warzoneUsername) {
          return alert("warzoneUSername already in use");
        }
        return (
          item.emailAddress === signupValues.emailAddress ||
          item.gamebuddyUsername === signupValues.gamebuddyUsername ||
          item.warzoneUsername === signupValues.warzoneUsername
        );
      };

      //probabilemte qui, per avere un errore unico in caso hai sia email che user gia in uso
      //(anziche avere un alert e poi un altro alert alla chiusura del primo), devi creare uno state per l error message,
      //che aggiorni con le if condition su, e poi lo renderizzi con un alert a fine funzione

      if (storedSignupValues.map(valuesChecker)) {
        storedSignupValues.push(signupValues);
        localStorage.setItem(
          "storedSignupValues",
          JSON.stringify(storedSignupValues)
        );
      }
    }
    console.log(signupValues);
    setSignupValues(blankSignupValues);
    //l alert con lo state error andrebbe qui
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
                  <label className="col-form-label cssBold">
                    Email address:
                  </label>
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
                  <label className="col-form-label cssBold" required>
                    Gaming Buddy username:
                  </label>
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
                  <label className="col-form-label cssBold" required>
                    Warzone username:
                  </label>
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
