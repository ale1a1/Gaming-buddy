import React, { Fragment } from "react";
import "../MainPage/MainPage.css";
import Navigation from "../Navigation/Navigation";

const MainPaige = (props) => {
  return (
    <Fragment>
      <div className="mainPage">
        <Navigation logoutHandler={props.logoutHandler} homeClass="active" />
        <div className="container mt-20 pt-5 transparent-dark">
          <h2 className="text-light font-monospace text-shadow">FEATURES</h2>
          <ul>
            <li>
              <h4 className="text-shadow text-light mt-1">
                create a gaming profile to show up on the player search
              </h4>
            </li>
            <li>
              <h4 className="text-shadow text-light mt-1">
                search your perfect gaming buddies applying detailed filters
                criterias
              </h4>
            </li>
            <li>
              <h4 className="text-shadow text-light mt-1">
                chat with your buddies if they appear online
              </h4>
            </li>
            <li>
              <h4 className="text-shadow text-light mt-1">
                message your buddies if they do not appear online and they will
                get back to you as soon as they log in
              </h4>
            </li>
            <li>
              <h4 className="text-shadow text-light mt-1">
                no need to exchange personal data! just login with your nickname
                and get in touch with your gaming buddies through our chat
                system
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default MainPaige;
