import React from "react";

import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <button onClick={() => props.logoHome()}>
        <span className="top-nav-bar__logo">PhotoLabs</span>
      </button>
      <TopicList {...props} />
      <FavBadge {...props} />
    </div>
  );
};

export default TopNavigation;
