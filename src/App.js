import React, { Fragment, useEffect, useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import MainPaige from "./components/MainPage/MainPage";
import { LoginRepository } from "./libs/repository/LoginRepository";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginRepository = new LoginRepository();
    if (loginRepository.retrieve()) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Fragment>
      {!isLoggedIn && <LoginPage />}
      {isLoggedIn && <MainPaige />}
    </Fragment>
  );
}

export default App;
