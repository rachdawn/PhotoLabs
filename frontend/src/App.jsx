import React from "react";

import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import photos from "mocks/photos";
import topics from "mocks/topics";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const mockData = {
    topics: {...topics},
    photos: {...photos}
  }

  return (
    <div className="App">
        <HomeRoute {...mockData}/>
    </div>
  );
};

export default App;


      {/* Map through the array and render PhotoListItem for each element */}
      {/* const photos = Array.from({ length: 3 });{photos.map((_, id) => ())} */}

    
