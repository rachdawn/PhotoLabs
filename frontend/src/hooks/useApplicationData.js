import { useState } from "react";
import photos from "mocks/photos";

const useApplicationData = () => {
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
  
  const state = {
    isModalView: isModalView, clickedPhoto: clickedPhoto, likedPhotos: likedPhotos
  };

  return ({
    state,
    toggleFavourite,
    handleClickedPhoto,
    handleCloseModal
  });
};

export default useApplicationData;