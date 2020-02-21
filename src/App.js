import React, { useContext } from "react";
import { Router, Redirect } from "@reach/router";
import { GlobalStyle } from "./styles/GlobalStyles";

import { NotRegisteredUser } from "./pages/NotRegistredUser";
import { NotFound } from "./pages/NotFound";
import { Detail } from "./pages/Details";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { Home } from "./pages/Home";

import { NavBar } from "./components/NavBar";
import { Logo } from "./components/Logo";

import { Context } from "./Context";

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </div>
  );
};
