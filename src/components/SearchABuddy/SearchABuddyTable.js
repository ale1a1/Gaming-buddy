import React, { Fragment } from "react";
import { MyBuddiesRepository } from "../../libs/repository/MyBuddiesRepository";
import "../SearchABuddy/SearchABuddyForm.css";
import "../../style.css";

const SearchABuddyTable = (props) => {  
  const myBuddiesRepository = new MyBuddiesRepository();
  const addBuddy = (buddy) => {
    return () => {
      myBuddiesRepository.save(buddy);
    };
  };


  const gameBuddy = props.foundBuddies.map((item) => {
    return (
      <tr>
        <td>{item.gamebuddyUsername}</td>
        <td>{item.warzoneUsername}</td>
        <td>{item.platform}</td>
        <td>{item.gameMap}</td>
        <td>{item.mode}</td>
        <td>{item.kd}</td>
        <td>{item.gameStyle}</td>
        <td>{item.lang}</td>
        <td>{item.days}</td>
        <td>{item.time}</td>
        <td>{item.timeZone}</td>
        <td>
          {" "}
          <button
            onClick={addBuddy(item)}
            className="btn btn-outline-light background"
          >
            Add to my buddies list
          </button>
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <table className="table text-light transparent-dark w-75 mt-7 ms-5">
        <thead>
          <tr>
            <th>Game Buddy Username</th>
            <th>Warzone Username</th>
            <th>Platform</th>
            <th>Map</th>
            <th>Mode</th>
            <th>Kd</th>
            <th>Game style</th>
            <th>Language</th>
            <th>Days</th>
            <th>Time</th>
            <th>Time zone</th>
          </tr>
        </thead>
        <tbody>{gameBuddy}</tbody>
      </table>
      <button
        onClick={props.toggleShowTable}
        className="btn btn-outline-light btn-lg background mt-5 ms-5"
      >
        REFINE SEARCH
      </button>
    </Fragment>
  );
};

export default SearchABuddyTable;
