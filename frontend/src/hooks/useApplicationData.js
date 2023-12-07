import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  isModalView: false,
  clickedPhoto: null,
  likedPhotos: [],
  photos: [],
  topics: [],
};

const ACTIONS = {
  TOGGLE_FAV: "TOGGLE_FAV",
  DISPLAY_MODAL: "DISPLAY_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV:
      return {
        ...state,
        likedPhotos: state.likedPhotos.includes(action.payload)
          ? state.likedPhotos.filter((id) => id !== action.payload)
          : [...state.likedPhotos, action.payload],
      };
    case ACTIONS.DISPLAY_MODAL:
      return {
        ...state,
        clickedPhoto: action.payload,
        isModalView: action.payload,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        clickedPhoto: action.payload,
        isModalView: action.payload,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV, payload: photoId });
  };

  const handleClickedPhoto = (photo) => {
    dispatch({ type: ACTIONS.DISPLAY_MODAL, payload: photo });
  };

  const handleCloseModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const getPhotoByTopic = (topicID) => {
    axios.get(`/api/topics/photos/${topicID}`)
      .then((res) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data })
      })
  };

  useEffect(() => {
    axios.get("/api/photos")
      .then((res) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
      })
  }, []);

  useEffect(() => {
    axios.get("/api/topics")
      .then((res) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res.data });
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return {
    state,
    toggleFavourite,
    handleClickedPhoto,
    handleCloseModal,
    getPhotoByTopic,
  };
};

export default useApplicationData;
