import React, { Fragment } from "react";
import "../SearchABuddy/SearchABuddyForm.css";
import "../../style.css";

const SearchABuddyTable = (props) => {
  //   const checkSearchStatus = props.checkSearchStatus(false);
  const removeFoundUsers = () => {
    localStorage.removeItem("FoundBuddies");
    props.searchStatusFalse()
  };
  return (
    <Fragment>
      <div className="text-light transparent-dark mt-7 ms-5 me-5">
        <h1>TABLE OF FOUND USERS WILL BE SHOWN HERE! VEDI A FINE PAGINA IL CODICE PER FARE LA TABELLA...prendi spunto</h1>
        <div>
          Ric che quando search riappare devi fare in modo di avere i parametri
          selezionati precedentemente a vista
        </div>
        <button          
          onClick={removeFoundUsers}
          className="btn btn-outline-light btn-lg background mt-5 ms-5"
        >
          REFINE SEARCH
        </button>
      </div>
    </Fragment>
  );
};

{/* <table className="table">
<thead>
  <tr>
    <th className="highligthedTh">DATE</th>
    <th className="textTh">CLINIC</th>
    <th>START TIME</th>
    <th>END TIME</th>
    <th className="textTh">AGENCY</th>
    <th>AGENCY BOOKING</th>
    <th>UMBRELLA ASSIGNMENT</th>
    <th>AMOUNT AGREED</th>
    <th>WORKED</th>
    <th>AGENCY TIMESHEET</th>
    <th>UMBRELLA TIMESHEET</th>
    <th>PAID</th>
  </tr>
</thead>
<tbody>
  {props.shifts.map((shift) => (
    <Shift
      key={shift.id}
      id={shift.id}
      clinic={shift.clinic}
      date={shift.date}
      amount={shift.amount}
      startTime={shift.startTime}
      endTime={shift.endTime}
      recruitmentAgency={shift.recruitmentAgency}
      isRecruterBookingFormSigned={shift.isRecruterBookingFormSigned}
      isUmbrellaAssignmentSigned={shift.isUmbrellaAssignmentSigned}
      shiftAmountAgreed={shift.shiftAmountAgreed}
      isShiftWorked={shift.isShiftWorked}
      isTimeSheetSubmittedToRecruiter={
        shift.isTimeSheetSubmittedToRecruiter
      }
      isTimeSheetSubmittedToUmbrella={
        shift.isTimeSheetSubmittedToUmbrella
      }
      isPaid={shift.isPaid}
      onRemove={props.onRemove}
      onEdit={props.openShiftEditer}
    />
  ))}
</tbody>
</table> */}

export default SearchABuddyTable;
