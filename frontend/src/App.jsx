import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const { state, toggleFavourite, handleClickedPhoto, handleCloseModal, getPhotoByTopic } =
    useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topics}
        photos={state.photos}
        onClickedPhoto={handleClickedPhoto}
        likedPhotos={state.likedPhotos}
        toggleFavourite={toggleFavourite}
        getPhotoByTopic={getPhotoByTopic}
      />
      {state.isModalView && (
        <PhotoDetailsModal
          photo={state.clickedPhoto}
          onClose={handleCloseModal}
          likedPhotos={state.likedPhotos}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
