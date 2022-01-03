import React, { Fragment } from "react";
import "../MainPage/MainPage.css";
import Navigation from "../Navigation/Navigation";

const MainPaige = (props) => {
  return (
    <Fragment>
      <div className="mainPage">
        <Navigation logoutHandler={props.logoutHandler} homeClass="active"/>       
      </div>
    </Fragment>
  );
};

export default MainPaige;
