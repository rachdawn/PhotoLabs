// HomeRoute.jsx
import React, { useState } from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const toggleFavourite = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      if (prevLikedPhotos.includes(photoId)) {
        return prevLikedPhotos.filter((id) => id !== photoId);
      } else {
        return [...prevLikedPhotos, photoId];
      }
    });
  };

  return (
    <div className="home-route">
      <TopNavigation likedPhotosCount={likedPhotos.length} selected={toggleFavourite} {...props.topics} />
      <PhotoList photos={props.photos} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default HomeRoute;
