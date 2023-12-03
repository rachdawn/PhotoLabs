import React from "react";
import TopNavigation from "components/TopNavigationBar";
import TopicList from "components/TopicList";
import PhotoList from "./components/PhotoList";
import "./App.scss";


// Note: Rendering a single component to build components in isolation
const App = () => {
  

  return (
    <div className="App">
        <TopNavigation/>
      {/* Map through the array and render PhotoListItem for each element */}
      {/* const photos = Array.from({ length: 3 });{photos.map((_, id) => ())} */}

        <PhotoList/>
    
    </div>
  );
};

export default App;
