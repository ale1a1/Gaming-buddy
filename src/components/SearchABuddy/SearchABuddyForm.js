import React, { Fragment, useState } from "react";
import "../SearchABuddy/SearchABuddyForm.css";
import { BlankGamingProfile } from "../../libs/models/BlankGamingProfile";
import { SearchBuddyRepository } from "../../libs/repository/SearchBuddyRepository";
import "../../style.css";

const SearchABuddyForm = (props) => {
  // const blankGamingProfile = new BlankGamingProfile();
  // const searchBuddyRepository = new SearchBuddyRepository();

  // const [gamingProfile, setGamingProfile] = useState(blankGamingProfile);
  const [gamingProfile, setGamingProfile] = useState(props.criteria);



  const platformHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, platform: event.target.value };
    });
    props.updateCriteria(gamingProfile);
  };
  const mapHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, gameMap: event.target.value };
    });
    props.updateCriteria(gamingProfile);
  };

  const modeHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, mode: event.target.value };
    });
    props.updateCriteria(gamingProfile);
  };
  const KdHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, kd: event.target.value };
    });
    props.updateCriteria(gamingProfile);
  };

  const gameStyleHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, gameStyle: event.target.value };
    });
    props.updateCriteria(gamingProfile);
  };

  const micHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, mic: event.target.value };
    });
    props.updateCriteria(gamingProfile);
  };

  const langHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, lang: event.target.value };
    });
    props.updateCriteria(gamingProfile);
  };

  const daysHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, days: event.target.value };
    });
    props.updateCriteria(gamingProfile);
  };

  const timeHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, time: event.target.value };
    });
    props.updateCriteria(gamingProfile);
  };

  const timeZoneHandler = (event) => {
    setGamingProfile((previousGamingProfileValues) => {
      return { ...previousGamingProfileValues, timeZone: event.target.value };
    });
    props.updateCriteria(gamingProfile);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.toggleShowTable()    
    props.updateCriteria(gamingProfile);
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
                  className="form-select platform"
                  aria-label="select platform"
                  onChange={platformHandler}
                  // value={!props.criteria ? undefined : props.criteria.platform}
                  value={!props.criteria ? undefined : gamingProfile.platform}
                  required
                >
                  <option value="">select</option>
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
                  value={!props.criteria ? undefined : gamingProfile.gameMap}
                  required
                >
                  <option value="">select</option>
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
                  value={!props.criteria ? undefined : gamingProfile.gameMode}
                >
                  <option value="Any">any</option>
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
                  value={!props.criteria ? undefined : gamingProfile.kd}
                >
                  <option value="Any">any</option>
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
                  value={!props.criteria ? undefined : gamingProfile.gameStyle}
                >
                  <option value="Any">any</option>
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
                  value={!props.criteria ? undefined : gamingProfile.mic}
                  required
                >
                  <option value="">select</option>
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
                  value={!props.criteria ? undefined : gamingProfile.lang}
                >
                  <option value="any">any</option>
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
                  value={!props.criteria ? undefined :gamingProfile.days}
                  required
                >
                  <option value="">select</option>
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
                  value={!props.criteria ? undefined : gamingProfile.time}
                  required
                >
                  <option value="">select</option>
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
                  value={!props.criteria ? undefined : gamingProfile.timeZone}
                  required
                >
                  <option value="">select</option>
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
