import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item" id={props.id}>
      <PhotoFavButton />
      <img
        className="photo-list__image"
        src={props.imageSource}
        alt="sample photo"
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.profile}
          alt="profile photo"
        />
        <div className="photo-list__user-info">
          <h2>{props.username}</h2>
          <h2 className="photo-list__user-location">
            {props.location.city}, {props.location.country}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
