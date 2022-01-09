import React, { Fragment, useState, useEffect } from "react";
import "../SearchABuddy/SearchABuddy.css";
import Navigation from "../Navigation/Navigation";
import { SearchRepository } from "../../libs/repository/SearchRepository";
import SearchABuddyForm from "./SearchABuddyForm";
import SearchABuddyTable from "./SearchABuddyTable";

const SearchABuddy = (props) => {
  const searchRepository = new SearchRepository();

  const [isSearchDone, setIsearchDone] = useState(false);

//   useEffect(() => {
//     if (searchRepository.list()[0]) {
//       setIsearchDone(true);
//     } else {
//       setIsearchDone(false);
//     }
//   }, []);

    const checkSearchStatus = (value) => {
      setIsearchDone(value);
    };

  return (
    <Fragment>
      <div className="searchABuddy">
        <Navigation logoutHandler={props.logoutHandler} searchClass="active" />
        {!isSearchDone && <SearchABuddyForm checkSearchStatus={checkSearchStatus} />}
        {isSearchDone && <SearchABuddyTable checkSearchStatus={checkSearchStatus} />}
      </div>
    </Fragment>
  );
};

export default SearchABuddy;
