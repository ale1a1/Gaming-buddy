import React, { Fragment } from "react";
import "../MyProfile/MyProfile.css";
import Navigation from "../Navigation/Navigation";
import MyProfileForm from "./MyProfileForm";
import MyProfileTable from "./MyProfileTable";
import { ProfileRepository } from "../../libs/repository/ProfileRepository";
import { LoginRepository } from "../../libs/repository/LoginRepository";

const MyProfile = (props) => {
  const profileRepository = new ProfileRepository();
  const loginRepository = new LoginRepository();
  const gamebuddyUsername = loginRepository.retrieve()[0];
  const usersFullProfiles = profileRepository.retrieve();
  let filteredUsersFullProfiles = "";
  if (usersFullProfiles) {
    filteredUsersFullProfiles = usersFullProfiles.filter((item) => {
      return item.gamebuddyUsername === gamebuddyUsername;
    });
  }
  const currentUserFullProfile = filteredUsersFullProfiles;

  const profileTable = (
    <MyProfileTable currentUserFullProfile={currentUserFullProfile} />
  );

  const profileForm = (
    <header>
      <div className="container mt-5 pt-5 h-25">
        <h1 className="display-5  text-light text-shadow  mt-4 background">
          Create your gaming profile in order to be added on our players
          database and to be contacted by other players!
        </h1>
        <button
          className="btn btn-outline-light btn-lg background"
          data-bs-toggle="modal"
          data-bs-target="#profileForm"
        >
          CREATE PROFILE
        </button>
      </div>
      <MyProfileForm submitButton="Create profile" onSubmitSwitcher="Create" />
    </header>
  );

  return (
    <Fragment>
      <div className="myProfile">
        <Navigation logoutHandler={props.logoutHandler} profileClass="active" />
        {currentUserFullProfile[0] && profileTable}
        {!currentUserFullProfile[0] && profileForm}
      </div>
    </Fragment>
  );
};

export default MyProfile;
