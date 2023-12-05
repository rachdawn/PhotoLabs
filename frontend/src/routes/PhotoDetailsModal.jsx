import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const {
    photo,
    onClose,
    isFavourite,
    toggleFavourite,
    onClickedPhoto,
    likedPhotos,
  } = props;
  const { similar_photos, id, urls, location, user } = photo;
  const photoData = { photos: similar_photos };
  console.log("pd:", photoData);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <section className="photo-details-modal__images">
        <PhotoFavButton
          key={id}
          isFavourite={likedPhotos.includes(photo.id)}
          toggleFavourite={toggleFavourite}
          onClickedPhoto={() => onClickedPhoto(id)}
          likedPhotos={likedPhotos}
        />
        <img
          key={photo.id}
          className="photo-details-modal__image"
          src={urls.regular}
          alt="sample modal photo"
        />
        <div className="photo-details-modal__photographer-details">
          <img
            src={user.profile}
            alt="profile photo"
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <h2>{user.username}</h2>
            <h2 className="photo-details-modal__photographer-location">
              {location.city}, {location.country}
            </h2>
          </div>
        </div>
        <header className="photo-details-modal__header">
          <h2>Similar Photos</h2>
        </header>

        <div>
          <PhotoList
            photos={Object.values(photo.similar_photos)}
            likedPhotos={likedPhotos}
            toggleFavourite={toggleFavourite}
            onClickedPhoto={onClickedPhoto}
          />
        </div>
      </section>
    </div>
  );
};

export default PhotoDetailsModal;
