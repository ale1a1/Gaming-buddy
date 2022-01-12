import React, { Fragment, useState } from "react";
import "../SearchABuddy/SearchABuddyForm.css";
import { ProfileRepository } from "../../libs/repository/ProfileRepository";
import { BlankGamingProfile } from "../../libs/models/BlankGamingProfile";
import "../../style.css";

const SearchABuddyForm = (props) => {
  const profileRepository = new ProfileRepository();
  const blankGamingProfile = new BlankGamingProfile();

  const [gamingProfile, setGamingProfile] = useState(blankGamingProfile);

  const platformHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, platform: event.target.value };
    });
  };
  const mapHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, gameMap: event.target.value };
    });
  };
  const modeHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, mode: event.target.value };
    });
  };
  const KdHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, kd: event.target.value };
    });
  };

  const gameStyleHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, gameStyle: event.target.value };
    });
  };

  const micHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, mic: event.target.value };
    });
  };
  const langHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, lang: event.target.value };
    });
  };

  const daysHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, days: event.target.value };
    });
  };

  const timeHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, time: event.target.value };
    });
  };

  const timeZoneHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, timeZone: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //const searchedBuddies = profileRepository.findUser(gamingProfile);
    console.debug("searching " + gamingProfile);
    // if (searchedBuddies) {
    // localStorage.removeItem("FoundBuddies");
    // // searchRepository.save(searchedBuddies);
    // localStorage.setItem("FoundBuddies", JSON.stringify(searchedBuddies));
    // props.searchStatusTrue();
    props.updateCriteria(gamingProfile);
    // } else {
    //   console.debug("No matches");
    // }
  };
  return (
    <Fragment>
      <div className="container mt-7">
        <form className="mt-5 w-50 h-25" onSubmit={submitHandler}>
          <div className="container text-light transparent-dark">
            <h1 className="ms-5 mt-5 text-light">CHOOSE THE CRITERIA</h1>
            <div className="d-flex justify-content-around">
              <div className="mb-3">
                <label className="col-form-label cssBold">Platform</label>
                <select
                  className="form-select"
                  aria-label="select platform"
                  onChange={platformHandler}
                  required
                >
                  <option selected value="">
                    select
                  </option>
                  <option value="Xbox">Xbox</option>
                  <option value="Play Station">Play Station</option>
                  <option value="Computer">Computer</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="col-form-label cssBold">Game</label>
                <select
                  className="form-select"
                  aria-label="select game"
                  onChange={mapHandler}
                  required
                >
                  <option selected value="">
                    select
                  </option>
                  <option value="Caldera">Caldera</option>
                  <option value="Caldera Vanguard">Caldera Vanguard</option>
                  <option value="Rebirth">Rebirth</option>
                  <option value="Rebirth">Plunder</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="col-form-label cssBold">Mode</label>
                <select
                  className="form-select"
                  aria-label="select role"
                  onChange={modeHandler}
                >
                  <option selected value="Any">
                    any
                  </option>
                  <option value="Duos">Duos</option>
                  <option value="Trios">Trios</option>
                  <option value="Quads">Quads</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div className="mb-3">
                <label className="col-form-label cssBold">KD</label>
                <select
                  className="form-select"
                  aria-label="select style"
                  onChange={KdHandler}
                >
                  <option selected value="Any">
                    any
                  </option>
                  <option value=">1">Over 1</option>
                  <option value="<1">Under 1</option>
                  <option value="0-0.5">0 - 0.5</option>
                  <option value="0.5-1.5">0.5 - 1.5</option>
                  <option value="1--1.5">1 - 1.5</option>
                  <option value="1.5-2.5">1.5 - 2.5</option>
                  <option value="1.5-2.5">1.5 - 2.5</option>
                  <option value="1.5-2.5">1.5 - 2.5</option>
                  <option value=">2.5">Over 2.5</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="col-form-label cssBold">Game style</label>
                <select
                  className="form-select"
                  aria-label="select style"
                  onChange={gameStyleHandler}
                >
                  <option selected value="Any">
                    any
                  </option>
                  <option value="Casual">Casual</option>
                  <option value="Aggressive pusher">Aggressive pusher</option>
                  <option value="Strategic">Strategic</option>
                  <option value="Strategic sniper">Strategic sniper</option>
                  <option value="Camper">Camper</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="col-form-label cssBold">Microphone</label>
                <select
                  className="form-select"
                  aria-label="select microphone"
                  onChange={micHandler}
                  required
                >
                  <option selected value="">
                    select
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div className="mb-3">
                <label className="col-form-label cssBold">Language</label>
                <select
                  className="form-select"
                  aria-label="select language"
                  onChange={langHandler}
                >
                  <option selected value="any">
                    any
                  </option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="col-form-label cssBold">Avaible (days)</label>
                <select
                  className="form-select"
                  aria-label="select days"
                  onChange={daysHandler}
                  required
                >
                  <option selected value="">
                    select
                  </option>
                  <option value="Monday-Friday">Monday-Friday</option>
                  <option value="Weekend">Weekend</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="col-form-label cssBold">Avaible (time)</label>
                <select
                  className="form-select"
                  aria-label="select time"
                  onChange={timeHandler}
                  required
                >
                  <option selected value="">
                    select
                  </option>
                  <option value="9-11">9-11</option>
                  <option value="7-9">7-9</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="col-form-label cssBold">Time zone</label>
                <select
                  className="form-select"
                  aria-label="select platform"
                  onChange={timeZoneHandler}
                  required
                >
                  <option selected value="">
                    select
                  </option>
                  <option value="GMT">GMT</option>
                  <option value="PST">PST</option>
                  <option value="EST">EST</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn btn-outline-light btn-lg background mt-5 ms-5">
            SEARCH
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default SearchABuddyForm;
