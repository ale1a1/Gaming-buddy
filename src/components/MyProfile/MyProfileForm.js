import React, { Fragment, useState } from "react";
import { ProfileRepository } from "../../libs/repository/ProfileRepository";
import { LoginRepository } from "../../libs/repository/LoginRepository";
import { SignupRepository } from "../../libs/repository/SignupRepository";
import { BlankGamingProfile } from "../../libs/models/BlankGamingProfile";
import "../MyProfile/MyProfileForm.css";

const MyProfileForm = (props) => {
  const profileRepository = new ProfileRepository();
  const loginRepository = new LoginRepository();
  const signupRepository = new SignupRepository();
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
    const gamebuddyUsername = loginRepository.list()[0];
    profileRepository.delete(gamebuddyUsername);
    const storedSignupValues = signupRepository.list();   
    storedSignupValues.filter((item) => {
      if (item.gamebuddyUsername === gamebuddyUsername) {
        const updateGamingProfile = {
          ...gamingProfile,
          emailAddress: item.emailAddress,
          gamebuddyUsername: item.gamebuddyUsername,
          password: item.password,
          warzoneUsername: item.warzoneUsername,
        };
        profileRepository.save(updateGamingProfile);
      }
      return item.gamebuddyUsername === gamebuddyUsername;
    });
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="profileForm"
        tabIndex="-1"
        aria-labelledby="getOfferLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="getOfferLabel">
                CREATE YOUR GAMING PROFILE
              </h5>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
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
                    required
                  >
                    <option selected value="">
                      select
                    </option>
                    <option value="Duos">Duos</option>
                    <option value="Trios">Trios</option>
                    <option value="Quads">Quads</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="col-form-label cssBold">KD</label>
                  <input
                    className="ms-3 col-2"
                    type="number"
                    id="inputNumber"
                    name="inputNumber"
                    onChange={KdHandler}
                    step="0.01"
                    required
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="col-form-label cssBold">Game style</label>
                  <select
                    className="form-select"
                    aria-label="select style"
                    onChange={gameStyleHandler}
                    required
                  >
                    <option selected value="">
                      select
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
                <div className="mb-3">
                  <label className="col-form-label cssBold">Language</label>
                  <select
                    className="form-select"
                    aria-label="select language"
                    onChange={langHandler}
                    required
                  >
                    <option selected value="">
                      select
                    </option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="col-form-label cssBold">
                    Avaible (days)
                  </label>
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
                  <label className="col-form-label cssBold">
                    Avaible (time)
                  </label>
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
                <div className="modal-footer">
                  <button
                    className="btn btn-danger"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button className="btn btn-primary" type="submit">
                    {props.submitButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyProfileForm;
