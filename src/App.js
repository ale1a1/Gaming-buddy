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
import { SearchBuddyRepository} from "./libs/repository/SearchBuddyRepository";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGamingProfileCreated, setIsGamingProfileCreated] = useState(false)

  
  const loginRepository = new LoginRepository();
  const searchBuddyRepository= new SearchBuddyRepository();


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
    searchBuddyRepository.clear()
  };

  const gamingProfileCreatedSwitch = () => {
    setIsGamingProfileCreated(true)    
    localStorage.setItem("gamingProfileToken", JSON.stringify("Created"));
  }
  
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("gamingProfileToken"))) {
      setIsGamingProfileCreated(true);
    } else {
      setIsGamingProfileCreated(false);
    }
  }, []);


  // This component is rendered with the class component, the others with the function load page
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
              <SearchABuddy isGamingProfileCreated={isGamingProfileCreated} logoutHandler={logoutHandler} />
            )}
          ></Route>
          <Route
            path="/Messages"
            element={loadPage(
              isLoggedIn,
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
              <MyProfile gamingProfileCreatedSwitch= {gamingProfileCreatedSwitch} logoutHandler={logoutHandler} />
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
