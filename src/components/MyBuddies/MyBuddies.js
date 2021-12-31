import React, { Fragment } from "react";
import "../MyBuddies/MyBuddies.css";
import Navigation from "../Navigation/Navigation";

const MyBuddies = (props) => {
  return (
    <Fragment>
      <div className="myBuddies">
        <Navigation logoutHandler={props.logoutHandler} buddiesClass="active" />       
      </div>
    </Fragment>
  );
};

export default MyBuddies;
