import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";
import topics from "mocks/topics";


const App = () => {
  const [isModalView, setModalView] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);
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
  const handleClickedPhoto = (photo) => {
    setClickedPhoto(photo);
    setModalView(true);
  };

  const handleCloseModal = () => {
    setClickedPhoto(null);
    setModalView(false);
  };

  const mockData = {
    topics: { ...topics },
    photos: { ...photos },
  };

  return (
    <div className="App">
      <HomeRoute {...mockData} onClickedPhoto={handleClickedPhoto} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} />
      {isModalView && <PhotoDetailsModal photo={clickedPhoto} onClose={handleCloseModal} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite}/>}
    </div>
  );
};

export default App;

