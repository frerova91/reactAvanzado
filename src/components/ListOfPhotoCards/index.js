import React from "react";
import { PhotoCard } from "../PhotoCard/index";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId }
  });

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
