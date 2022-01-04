import React, { Fragment } from "react";
import MyProfileForm from "./MyProfileForm";
import ".././../style.css";
import "./MyProfileTable.css";

const MyProfileTable = (props) => {
  const userProfile = {
    gamebuddyUsername: props.currentUserFullProfile[0].gamebuddyUsername,
    warzoneUsername: props.currentUserFullProfile[0].warzoneUsername,
    platform: props.currentUserFullProfile[0].platform,
    gameMap: props.currentUserFullProfile[0].gameMap,
    mode: props.currentUserFullProfile[0].mode,
    kd: props.currentUserFullProfile[0].kd,
    gameStyle: props.currentUserFullProfile[0].gameStyle,
    mic: props.currentUserFullProfile[0].mic,
    lang: props.currentUserFullProfile[0].lang,
    days: props.currentUserFullProfile[0].days,
    time: props.currentUserFullProfile[0].time,
    timeZone: props.currentUserFullProfile[0].timeZone,
  };
  return (
    <Fragment>
      <div className="container">
        <table class="table text-light transparent-dark mt-7 w-50 ml-10">
          <tbody>
            <tr>
              <th scope="col">Gaming Buddy Username</th>
              <td>{userProfile.gamebuddyUsername}</td>
            </tr>
            <tr>
              <th scope="col">Warzone Username</th>
              <td>{userProfile.warzoneUsername}</td>
            </tr>
            <tr>
              <th scope="col">Platform</th>
              <td>{userProfile.platform}</td>
            </tr>
            <tr>
              <th scope="col">Favourite map</th>
              <td>{userProfile.gameMap}</td>
            </tr>
            <tr>
              <th scope="col">Favourite mode</th>
              <td>{userProfile.mode}</td>
            </tr>
            <tr>
              <th scope="col">KD</th>
              <td>{userProfile.kd}</td>
            </tr>
            <tr>
              <th scope="col">Game Style</th>
              <td>{userProfile.gameStyle}</td>
            </tr>
            <tr>
              <th scope="col">Microphone</th>
              <td>{userProfile.mic}</td>
            </tr>
            <tr>
              <th scope="col">Language</th>
              <td>{userProfile.lang}</td>
            </tr>
            <tr>
              <th scope="col">Availability - Days</th>
              <td>{userProfile.days}</td>
            </tr>
            <tr>
              <th scope="col">Availability - Time</th>
              <td>{userProfile.time}</td>
            </tr>
            <tr>
              <th scope="col">Time zone</th>
              <td>{userProfile.timeZone}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-outline-light btn-lg background ml-25"
          data-bs-toggle="modal"
          data-bs-target="#profileForm"
        >
          EDIT PROFILE
        </button>
      </div>
      <MyProfileForm submitButton="Save changes" submitSwitcher="Edit"/>
    </Fragment>
  );
};

export default MyProfileTable;
