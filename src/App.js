import React, { useContext, Suspense } from "react";
import { Router, Redirect } from "@reach/router";
import { GlobalStyle } from "./styles/GlobalStyles";

//import { NotRegisteredUser } from "./pages/NotRegistredUser";
//import { NotFound } from "./pages/NotFound";
//import { Detail } from "./pages/Details";
//import { Favs } from "./pages/Favs";
//import { User } from "./pages/User";
//import { Home } from "./pages/Home";

import { NavBar } from "./components/NavBar";
import { Logo } from "./components/Logo";

import { Context } from "./Context";

const Home = React.lazy(() => import("./pages/Home"));
const Detail = React.lazy(() => import("./pages/Details"));
const Favs = React.lazy(() => import("./pages/Favs"));
const User = React.lazy(() => import("./pages/User"));
const NotRegisteredUser = React.lazy(() => import("./pages/NotRegistredUser"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<div>...Loading in Progress</div>}>
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
    </Suspense>
  );
};
