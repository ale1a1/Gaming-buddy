import React, { Fragment } from "react";

const MyProfileTable = (props) => {
  const userGameMap = props.currentUserFullProfile[0].gameMap;
  const userGameStyle = props.currentUserFullProfile[0].gameStyle;
  const userDays = props.currentUserFullProfile[0].days;
  const userGamebuddyUsername =
    props.currentUserFullProfile[0].gamebuddyUsername;
  const userKD = props.currentUserFullProfile[0].kd;
  return (
    <Fragment>
      <table className="mt-5 ms-5 text-danger bg-light">
        <thead className="text-dark ">USER PROFILE</thead>
        <tbody>
          <tr>
            <td>{userGamebuddyUsername}</td>
          </tr>
          <tr>
            <td>{userKD}</td>
          </tr>
          <tr>
            <td>{userDays}</td>
          </tr>

          <tr>
            <td>{userGameStyle}</td>
          </tr>
          <tr>
            <td>{userGameMap}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default MyProfileTable;
