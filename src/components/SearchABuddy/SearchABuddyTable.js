import React, { Fragment } from "react";
import "../SearchABuddy/SearchABuddyForm.css";
import "../../style.css";

const SearchABuddyTable = (props) => {
  const checkSearchStatus = props.checkSearchStatus(false);
  return (
    <Fragment>
      <div className="text-light transparent-dark mt-7 ms-5 me-5">
        <h1>TABLE OF FOUND USERS WILL BE SHOWN HERE!</h1>
        <div>
          Ric che quando search riappare devi fare in modo di avere i parametri
          selezionati precedentemente a vista
        </div>
        <button
          onClick={checkSearchStatus}
          className="btn btn-outline-light btn-lg background mt-5 ms-5"
        >
          REFINE SEARCH
        </button>
      </div>
    </Fragment>
  );
};

export default SearchABuddyTable;
