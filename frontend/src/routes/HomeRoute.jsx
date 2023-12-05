import React, { useState } from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, onClickedPhoto, likedPhotos, toggleFavourite }) => {
  return (
    <div className="home-route">
      <TopNavigation
        likedPhotosCount={likedPhotos.length}
        selected={toggleFavourite}
        {...topics}
      />
      <PhotoList
        photos={Object.values(photos)}
        likedPhotos={likedPhotos}
        toggleFavourite={toggleFavourite}
        onClickedPhoto={onClickedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
