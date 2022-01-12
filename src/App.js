import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import MainPaige from "./components/MainPage/MainPage";
import SearchABuddy from "./components/SearchABuddy/SearchABuddy";
import MyMessages from "./components/MyMessages/MyMessages";
import MyBuddies from "./components/MyBuddies/MyBuddies";
import MyProfile from "./components/MyProfile/MyProfile";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import { LoginRepository } from "./libs/repository/LoginRepository";
import { ProfileRepository } from "./libs/repository/ProfileRepository";
//import { SearchRepository} from "./libs/repository/SearchBuddyRepository";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginRepository = new LoginRepository();
  // const profileRepository = new ProfileRepository();
  //const searchRepository = new SearchRepository();

  useEffect(() => {
    if (loginRepository.list()[0]) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("CurrentGamebuddyUser");
    setIsLoggedIn(false);
  };

  // logic for search compenent conditional rendering

  // useEffect(() => {
  //   if (searchRepository.list()[0]) {
  //     setIsearchDone(true);
  //   } else {
  //     setIsearchDone(false);
  //   }
  // }, []);

  // Moved to SearchABuddy.js
  // const [isSearchDone, setIsearchDone] = useState(false);

  // const searchStatusTrue = () => {
  //   setIsearchDone(true);
  // };
  // const searchStatusFalse = () => {
  //   setIsearchDone(false);
  // };
  // end of logic for search compenent conditional rendering

  // const homePage = isLoggedIn ? (
  //   <MainPaige logoutHandler={logoutHandler} />
  // ) : (
  //   <LoginPage />
  // );

  // const searchABuddy = isLoggedIn ? (
  //   <SearchABuddy
  //     // searchStatus={isSearchDone}
  //     // searchStatusTrue={searchStatusTrue}
  //     // searchStatusFalse={searchStatusFalse}
  //     logoutHandler={logoutHandler}
  //   />
  // ) : (
  //   <LoginPage />
  // );

  // const myMessages = isLoggedIn ? (
  //   <MyMessages logoutHandler={logoutHandler} />
  // ) : (
  //   <LoginPage />
  // );
  // const myBuddies = isLoggedIn ? (
  //   <MyBuddies logoutHandler={logoutHandler} />
  // ) : (
  //   <LoginPage />
  // );

  // const myProfile = isLoggedIn ? (
  //   <MyProfile logoutHandler={logoutHandler} />
  // ) : (
  //   <LoginPage />
  // );

  // One component rendered with the class component
  const mainPage = new RouteComponent(
    isLoggedIn,
    <MainPaige logoutHandler={logoutHandler} />
  );

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={mainPage.element()}></Route>
          <Route
            path="/Search"
            element={loadPage(
              isLoggedIn,
              <SearchABuddy logoutHandler={logoutHandler} />
            )}
          ></Route>
          <Route
            path="/Messages"
            element={loadPage(
              loadPage,
              <MyMessages logoutHandler={logoutHandler} />
            )}
          ></Route>
          <Route
            path="/Buddies"
            element={loadPage(
              isLoggedIn,
              <MyBuddies logoutHandler={logoutHandler} />
            )}
          ></Route>
          <Route
            path="/Profile"
            element={loadPage(
              isLoggedIn,
              <MyProfile logoutHandler={logoutHandler} />
            )}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

function loadPage(isLoggedIn, component) {
  return isLoggedIn ? component : <LoginPage />;
}

class RouteComponent {
  constructor(isLoggedIn, component) {
    this.isLoggedIn = isLoggedIn;
    this.component = component;
  }

  element() {
    return this.isLoggedIn ? this.component : <LoginPage />;
  }
}

export default App;
