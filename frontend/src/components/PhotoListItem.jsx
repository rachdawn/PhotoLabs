// PhotoListItem.jsx
import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, isFavourite, toggleFavourite }) => {
  return (
    <li key={photo.id} className="photo-list__item">
      <PhotoFavButton key={photo.id} isFavourite={isFavourite} toggleFavourite={toggleFavourite} />
      <img
        className="photo-list__image"
        src={photo.urls.regular}
        alt="sample photo"
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt="profile photo"
        />
        <div className="photo-list__user-info">
          <h2>{photo.user.username}</h2>
          <h2 className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </h2>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
