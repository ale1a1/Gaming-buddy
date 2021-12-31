import React, { Fragment } from "react";
import "../SearchABuddy/SearchABuddy.css";
import Navigation from "../Navigation/Navigation";

const SearchABuddy = (props) => {
  return (
    <Fragment>
      <div className="searchABuddy">
        <Navigation logoutHandler={props.logoutHandler} searchClass="active"/>       
      </div>
    </Fragment>
  );
};

export default SearchABuddy;
