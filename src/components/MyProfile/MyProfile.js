import React, { Fragment } from "react";
import "../MyProfile/MyProfile.css";
import Navigation from "../Navigation/Navigation";
import MyProfileForm from "./MyProfileForm";

//crea un conditional rendering
// se il toke profile esite nel local storage...mostri il profile...se non esite...mostri il form per crearlo...

const MyProfile = (props) => {
  return (
    <Fragment>
      <div className="myProfile">
        <Navigation logoutHandler={props.logoutHandler} profileClass="active" />
        <header>
          <div className="container mt-5 pt-5 h-25">
            <h1 className="display-5  text-light text-shadow  mt-4 background">
              Create your gaming profile in order to be added on our players database and to be contacted by other players!
            </h1>
            <button
              className="btn btn-outline-light btn-lg background"
              data-bs-toggle="modal"
              data-bs-target="#profileForm"
            >
              CREATE PROFILE
            </button>
          </div>
          <MyProfileForm />
        </header>
      </div>
    </Fragment>
  );
};

export default MyProfile;
