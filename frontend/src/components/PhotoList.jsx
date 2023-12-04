import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, likedPhotos, toggleFavourite, onClickedPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavourite={likedPhotos.includes(photo.id)}
          toggleFavourite={() => toggleFavourite(photo.id)}
          onClickedPhoto={() => onClickedPhoto(photo)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
