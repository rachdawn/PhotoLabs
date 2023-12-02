import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
    const [isFavourite, setFavourite] = useState(false);
    const handleClick = () => { setFavourite(!isFavourite) };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">      
          <FavIcon selected={isFavourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;