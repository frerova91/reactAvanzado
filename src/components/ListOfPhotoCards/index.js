import React from "react";
import { PhotoCard } from "../PhotoCard/index";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

//HAY CAMBIOS EN LA ULTIMA VERSION DE APOLLO ASI QUE HAY QUE HACER CAMBIO PARA QUE FUNCIONE
const WITH_PHOTOS = gql`
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
`;

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(WITH_PHOTOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <ul>
      {data.photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

/*
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
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent); */
