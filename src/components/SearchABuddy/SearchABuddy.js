import React, { Fragment, useState } from "react";
import "../SearchABuddy/SearchABuddy.css";
import Navigation from "../Navigation/Navigation";

import SearchABuddyForm from "./SearchABuddyForm";
import SearchABuddyTable from "./SearchABuddyTable";

import { SearchBuddyRepository } from "../../libs/repository/SearchBuddyRepository";
import { ProfileRepository } from "../../libs/repository/ProfileRepository";
import { LoginRepository } from "../../libs/repository/LoginRepository";

const SearchABuddy = (props) => {
  const searchBuddyRepository = new SearchBuddyRepository();
  const profileRepository = new ProfileRepository();
  const loginRepository = new LoginRepository();

  // const defaultCriteria = {
  //   platform: "select",
  //   gameMap: "select",
  //   mode: "any",
  //   // kd: "",
  //   gameStyle: "any",
  //   mic: "select",
  //   lang: "any",
  //   days: "select",
  //   time: "select",
  //   timeZone: "select",
  // };


  const currentUser = loginRepository.list()[0];
  const tokenFullProfileCreated = profileRepository.findCurrentGamebuddyUser(currentUser)[0];
  //this is the token that will determine the conditional rendering of the search form or the link to create the 
  //personal profile before to search other players
  //if currentUser do not have gaming profile yet, can not search other players

  const criteria = searchBuddyRepository.findOne();
  // const criteria = defaultCriteria;
  const [criteriaState, setCriteria] = useState(criteria);

  

  const foundBuddiesIncludingCurrentUser = profileRepository.findUser(
    criteriaState || {}
  );
  let foundBuddies = foundBuddiesIncludingCurrentUser.filter((item) => {
    return item.gamebuddyUsername !== currentUser;
  });

  const [showTable, setShowTable] = useState(false);

  const updateCriteria = (criteria) => {
    searchBuddyRepository.clear();
    searchBuddyRepository.save(criteria);
    setCriteria(criteria);
    // setShowTable(true);
  };

  const toggleShowTable = () => {
    setShowTable(!showTable);
    console.log(tokenFullProfileCreated)
  };

  return (
    <Fragment>
      <div className="searchABuddy">
        <Navigation logoutHandler={props.logoutHandler} searchClass="active" />
        {/* {!props.isGamingProfileCreated && ( */}
        {!tokenFullProfileCreated && (
          <div className="mt-5 text-light bg-dark">
            <h1>
              In order to search you need to create your own profile first!
            </h1>
            <button>
              <a href="Profile">Click here to create your profile</a>
            </button>
          </div>
        )}
        {/* {!showTable && props.isGamingProfileCreated && ( */}
          {!showTable && tokenFullProfileCreated && (
          <SearchABuddyForm
            updateCriteria={updateCriteria}
            foundBuddies={foundBuddies}
            currentUser={currentUser}
            foundBuddiesIncludingCurrentUser={foundBuddiesIncludingCurrentUser}
            criteria={criteria}
            toggleShowTable={toggleShowTable}
          />
        )}
        {/* {showTable && props.isGamingProfileCreated && ( */}
          {showTable && tokenFullProfileCreated && (
          <SearchABuddyTable
            toggleShowTable={toggleShowTable}
            foundBuddies={foundBuddies}
          />
        )}
      </div>
    </Fragment>
  );
};

export default SearchABuddy;
