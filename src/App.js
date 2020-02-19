import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/index";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards/index";

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
);
