import React from "react";

import HomeRoute from "routes/HomeRoute";
import "./App.scss";


// Note: Rendering a single component to build components in isolation
const App = () => {
  

  return (
    <div className="App">
        <HomeRoute/>
    </div>
  );
};

export default App;


      {/* Map through the array and render PhotoListItem for each element */}
      {/* const photos = Array.from({ length: 3 });{photos.map((_, id) => ())} */}

    
