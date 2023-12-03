// PhotoList.jsx
import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = ({ likedPhotos, toggleFavourite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavourite={likedPhotos.includes(photo.id)}
          toggleFavourite={() => toggleFavourite(photo.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
