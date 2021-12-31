import React, { Fragment } from "react";
// import { LogoutRepository } from "../../libs/repository/LogoutRepository";

const Navigation = (props) => {
//   const logoutRepository = new LogoutRepository();
//   const logoutHandler = () => {
//     console.log("logout");
//     logoutRepository.delete("Logged in");
//   };
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top shadow">
        <div className="container-fluid">
          <a className="navbar-brand font-monospace" href="/">
            Gaming Buddy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Navbar"
            aria-controls="Navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${props.homeClass} text-uppercase`} href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${props.searchClass} text-uppercase`} href="Search">
                  Search a buddy
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${props.messageClass} text-uppercase`} href="Messages">
                  My messages
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${props.buddiesClass} text-uppercase`} href="Buddies">
                  My buddies
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${props.profileClass} text-uppercase`} href="Profile">
                  My profile
                </a>
              </li>
            </ul>
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={props.logoutHandler}
            >
              logout
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default Navigation;
