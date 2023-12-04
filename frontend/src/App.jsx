import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";
import topics from "mocks/topics";

const App = () => {
  const [isModalView, setModalView] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);

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
      <HomeRoute {...mockData} onClickedPhoto={handleClickedPhoto} />
      {isModalView && <PhotoDetailsModal photo={clickedPhoto} onClose={handleCloseModal}/>}
    </div>
  );
};

export default App;

