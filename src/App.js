import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import MainPaige from "./components/MainPage/MainPage";
import SearchABuddy from "./components/SearchABuddy/SearchABuddy"
import MyMessages from "./components/MyMessages/MyMessages"
import MyBuddies from "./components/MyBuddies/MyBuddies"
import MyProfile from "./components/MyProfile/MyProfile"
import ErrorPage from "./components/ErrorPage/ErrorPage"


import { LoginRepository } from "./libs/repository/LoginRepository";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginRepository = new LoginRepository();

  useEffect(() => {
    if (loginRepository.retrieve()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("LoginToken");
    setIsLoggedIn(false);
  };

  const homePage = isLoggedIn ? (
    <MainPaige logoutHandler={logoutHandler} />
  ) : (
    <LoginPage />
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={homePage}></Route>
        <Route path="/Search" element={<SearchABuddy />}></Route>
        <Route path="/Messages" element={<MyMessages />}></Route>
        <Route path="/Buddies" element={<MyBuddies />}></Route>
        <Route path="/Profile" element={<MyProfile />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
