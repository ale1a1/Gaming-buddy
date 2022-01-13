import React, { Fragment, useState } from "react";
import "../SearchABuddy/SearchABuddy.css";
import Navigation from "../Navigation/Navigation";

import SearchABuddyForm from "./SearchABuddyForm";
import SearchABuddyTable from "./SearchABuddyTable";

import { SearchBuddyRepository } from "../../libs/repository/SearchBuddyRepository";
import { ProfileRepository } from "../../libs/repository/ProfileRepository";

const SearchABuddy = (props) => {
  const searchBuddyRepository = new SearchBuddyRepository();
  const profileRepository = new ProfileRepository();


  const criteria = searchBuddyRepository.findOne();
  const [criteriaState, setCriteria] = useState(criteria);

  let foundBuddies = profileRepository.findUser(criteriaState || {});
  const [showTable, setShowTable] = useState(false);

  const updateCriteria = (criteria) => {
    searchBuddyRepository.clear();
    searchBuddyRepository.save(criteria);
    setCriteria(criteria);
    setShowTable(true);
  };

  const toggleShowTable = () => {
    setShowTable(!showTable);
  };
  
  return (
    <Fragment>
      <div className="searchABuddy">
        <Navigation logoutHandler={props.logoutHandler} searchClass="active" />
        {!showTable && <SearchABuddyForm updateCriteria={updateCriteria} />}
        {showTable && (
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
