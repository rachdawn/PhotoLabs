import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = (props) => {
  return (
    <div className="fav-badge">
      <FavIcon
        selected={!!props.likedPhotosCount}
        displayAlert={!!props.likedPhotosCount}
      />
    </div>
  );
};

export default FavBadge;
