import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = Array.from({ length: 3 });

  return (
    <div className="App">
      {/* Map through the array and render PhotoListItem for each element */}
      {photos.map((_, index) => (
        <PhotoListItem
          key={index}
          imageSource={sampleDataForPhotoListItem.imageSource}
          profile={sampleDataForPhotoListItem.profile}
          username={sampleDataForPhotoListItem.username}
          location={sampleDataForPhotoListItem.location}
        />
      ))}
    </div>
  );
};

export default App;
