import React from "react";
import { PhotoCard } from "../PhotoCard";

import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

//HAY CAMBIOS EN LA ULTIMA VERSION DE APOLLO ASI QUE HAY QUE HACER CAMBIO PARA QUE FUNCIONE
const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

//este patron se le llama un componente de orden superior
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
