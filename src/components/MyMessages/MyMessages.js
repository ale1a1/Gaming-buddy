import React, { Fragment } from "react";
import "../MyMessages/MyMessages.css";
import Navigation from "../Navigation/Navigation";

const MainPaige = (props) => {
  return (
    <Fragment>
      <div className="myMessages">
        <Navigation logoutHandler={props.logoutHandler} messageClass="active"/>
      </div>
    </Fragment>
  );
};

export default MainPaige;
