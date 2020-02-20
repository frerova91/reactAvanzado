import React from "react";
import { Router } from "@reach/router";
import { GlobalStyle } from "./styles/GlobalStyles";
import { NotRegisteredUser } from "./pages/NotRegistredUser";
import { Detail } from "./pages/Details";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { Home } from "./pages/Home";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import Context from "./Context";

const UserLogged = ({ children }) => {
  return children({ isAuth: false }); //HARD CODE STATUS
};

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path={"/"} />
        <Home path={"/pet/:id"} />
        <Detail path={"/detail/:detailId"} />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </div>
  );
};
