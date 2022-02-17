import React, { Fragment, useState } from "react";
import { MyBuddiesRepository } from "../../libs/repository/MyBuddiesRepository";
import "../SearchABuddy/SearchABuddyForm.css";
import "../../style.css";

const SearchABuddyTable = (props) => {
  const myBuddiesRepository = new MyBuddiesRepository();
  const addBuddy = (buddy) => {
    return () => {
      // console.log(myBuddiesRepository.findUser(buddy.gamebuddyUsername));
      // if (myBuddiesRepository.findUser(buddy.gamebuddyUsername) === undefined) {
      myBuddiesRepository.save(buddy);
      const updatedGameBuddies = props.foundBuddies.map((item) => {
        const alreadyBuddy = myBuddiesRepository.findUser(
          item.gamebuddyUsername
        );
        if (alreadyBuddy) {
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
                <button
                  onClick={addBuddy(item)}
                  className="btn btn-outline-light background"
                  disabled
                >
                  already on my list
                </button>
              </td>
            </tr>
          );
        } else {
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
                <button
                  onClick={addBuddy(item)}
                  className="btn btn-outline-light background"
                >
                  Add to my buddies list
                </button>
              </td>
            </tr>
          );
        }
      });
      setGameBuddies(updatedGameBuddies);
      console.log(gameBuddies);
      console.log(gameBuddy);
      console.log(updatedGameBuddies);
      // } else {
      //     "buddy already on your favourites...fucking implement the table so the button will get disactivated and the text will say already my buddy instead of add"
      //   );
      // }
      //questo else verra cancellato credo, quando mostrerai nel bottone (disativato) se un un user è gia in lista favoriti
    };
  };

  const gameBuddy = props.foundBuddies.map((item) => {
    const alreadyBuddy = myBuddiesRepository.findUser(item.gamebuddyUsername);
    if (alreadyBuddy) {
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
            <button
              onClick={addBuddy(item)}
              className="btn btn-outline-light background"
              disabled
            >
              already on my list
            </button>
          </td>
        </tr>
      );
    } else {
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
            <button
              onClick={addBuddy(item)}
              className="btn btn-outline-light background"
            >
              Add to my buddies list
            </button>
          </td>
        </tr>
      );
    }
  });

  const [gameBuddies, setGameBuddies] = useState(gameBuddy);

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
        <tbody>{gameBuddies}</tbody>
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
