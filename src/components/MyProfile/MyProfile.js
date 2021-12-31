import React, { Fragment } from "react";
import "../MyProfile/MyProfile.css";
import Navigation from "../Navigation/Navigation";

const MyProfile = (props) => {
  return (
    <Fragment>
      <div className="myProfile">
        <Navigation logoutHandler={props.logoutHandler} profileClass="active"/>        
      </div>
    </Fragment>
  );
};

export default MyProfile;
