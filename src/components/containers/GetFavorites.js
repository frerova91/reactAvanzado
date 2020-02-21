import React from "react";
import { Query } from "@apollo/react-components";
import { gql } from "apollo-boost";
import { ListOfFavs } from "../ListOfFavs";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>...Loading</p>;
  if (error) return <p>...error</p>;
  const { favs } = data;

  return <ListOfFavs favs={favs} />;
};

export const FavsWithQuery = () => {
  return (
    <Query query={GET_FAVS} fetchPolicy="cache-and-network">
      {renderProp}
    </Query>
  );
};
