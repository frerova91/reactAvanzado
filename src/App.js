import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/index";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards/index";
//import { ListOfPhotoCardsComponent } from "../src/components/containers/ListOfPhotoCards";

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </>
);
