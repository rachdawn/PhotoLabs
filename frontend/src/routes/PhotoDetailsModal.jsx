import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { photo, onClose, isFavourite, toggleFavourite, onClickedPhoto, likedPhotos } =
    props;
  const { similar_photos, urls, location, user } = photo;
  const photoData = { photos: similar_photos };
  console.log("pd:", photoData);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <section className="photo-details-modal__images">
        <PhotoFavButton
          key={photo.id}
          isFavourite={isFavourite}
          toggleFavourite={toggleFavourite}
          onClickedPhoto={() => onClickedPhoto(photo)}
        />
        <img
          className="photo-details-modal__image"
          src={photo.urls.regular}
          alt="sample modal photo"
        />
      <div className="photo-details-modal__photographer-details">
        <img
          src={photo.user.profile}
          alt="profile photo"
          className="photo-details-modal__photographer-profile"
        />
        <div className="photo-details-modal__photographer-info">
          <h2>{photo.user.username}</h2>
          <h2 className="photo-details-modal__photographer-location">
            {photo.location.city}, {photo.location.country}
          </h2>
        </div>
      </div>
      <header className="photo-details-modal__header">
        <h2>Similar Photos</h2>
      </header>

      <div >
        <PhotoList
          photos={similar_photos}
          likedPhotos={[]}
          toggleFavourite={toggleFavourite}
          onClickedPhoto={onClickedPhoto}
        />
      </div>
      </section>
    </div>
  );
};

export default PhotoDetailsModal;
