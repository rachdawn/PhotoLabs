import { useReducer } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

const ACTIONS = {
    TOGGLE_FAV: 'TOGGLE_FAV',
    DISPLAY_MODAL: 'DISPLAY_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
}

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
            isModalView: action.payload
        };
      case ACTIONS.CLOSE_MODAL:
        return {
            ...state,
            clickedPhoto: action.payload,
            isModalView: action.payload
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
};

const useApplicationData = () => {
    const [state, dispatch] = useReducer(reducer, {
      isModalView: false,
      clickedPhoto: null,
      likedPhotos: [],
      photos: photos,
      topics: topics,
    });
  
    const toggleFavourite = (photoId) => {
      dispatch({ type: ACTIONS.TOGGLE_FAV, payload: photoId });
    };
  
    const handleClickedPhoto = (photo) => {
      dispatch({ type: ACTIONS.DISPLAY_MODAL, payload: photo });
    };
  
    const handleCloseModal = () => {
      dispatch({ type: ACTIONS.CLOSE_MODAL });
    };
  
    return {
      state,
      toggleFavourite,
      handleClickedPhoto,
      handleCloseModal,
    };
  };

export default useApplicationData;