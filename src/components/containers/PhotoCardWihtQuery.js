import React from "react";
import { PhotoCard } from "../PhotoCard/index";

import { gql } from "apollo-boost";
//import { Query } from "@apollo/react-components";
import { useQuery } from "@apollo/react-hooks";

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;
//MUCHO CUIDADO SIN LOS IF COMO NO ESTAMOS EVALUANDO DE FORMA ASINCRONA DA ERROR NUNCA LO MUESTRA
export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(query, { variables: { id } });
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error...</p>;
  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};

/* export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {({ loading, error, data }) => {
      const { photo = {} } = data;
      return <PhotoCard {...photo}></PhotoCard>;
    }}
  </Query>
); */
