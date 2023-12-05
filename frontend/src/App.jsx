import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";
import topics from "mocks/topics";
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const { state, toggleFavourite, handleClickedPhoto, handleCloseModal } = useApplicationData();

  const mockData = {
    topics: { ...topics },
    photos: { ...photos },
  };

  return (
    <div className="App">
      <HomeRoute {...mockData} onClickedPhoto={handleClickedPhoto} likedPhotos={state.likedPhotos} toggleFavourite={toggleFavourite} />
      {state.isModalView && <PhotoDetailsModal photo={state.clickedPhoto} onClose={handleCloseModal} likedPhotos={state.likedPhotos} toggleFavourite={toggleFavourite}/>}
    </div>
  );
};

export default App;

