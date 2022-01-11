import React, { Fragment } from "react";
import "../SearchABuddy/SearchABuddy.css";
import Navigation from "../Navigation/Navigation";
// import { SearchRepository } from "../../libs/repository/SearchRepository";
import SearchABuddyForm from "./SearchABuddyForm";
import SearchABuddyTable from "./SearchABuddyTable";

const SearchABuddy = (props) => {
  // const searchRepository = new SearchRepository();

  // const foundBuddies = searchRepository.list();

  return (
    <Fragment>
      <div className="searchABuddy">
        <Navigation logoutHandler={props.logoutHandler} searchClass="active" />
        {!props.searchStatus && (
          <SearchABuddyForm
            searchStatusTrue={props.searchStatusTrue}
            searchStatusFalse={props.searchStatusFalse}
          />
        )}
        {props.searchStatus && (
          <SearchABuddyTable
            searchStatusFalse={props.searchStatusFalse}
            searchStatusTrue={props.searchStatusTrue}
          />
        )}
      </div>
    </Fragment>
  );
};

export default SearchABuddy;
