import React, { Fragment, useState } from "react";
// import "./style.css";

const LoginModal = () => {
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
              <form                
              >
                <div className="mb-3">
                  <label className="col-form-label cssBold">
                    Gaming Buddy username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Gaming Buddy username"
                    placeholder="Insert your Gaming Buddy username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label cssBold" required>
                    Password:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Password"
                    placeholder="Insert your password"
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
