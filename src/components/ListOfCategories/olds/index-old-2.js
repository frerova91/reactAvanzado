import React, { useEffect, useState } from "react";
import { Category } from "../Category";

import { List, Item } from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function() {
    //Tambien podemos usar (async/ await) pero necesitamos npm i -D @babel/runtime @babel/plugin-transform-runtime
    window
      //.fetch("https://petgram-server.midudev.now.sh/categories") //esta dir deberia ser de tu servidor de esta app.
      .fetch("https://petgram-server-unreal.now.sh/categories")
      .then(res => res.json())
      .then(response => {
        setCategories(response);
      });
  }, []);

  useEffect(
    function() {
      const onScroll = e => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = fixed => (
    <List className={fixed ? "fixed" : ""}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
