import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const topicsArray = Object.keys(props).map((property) => {
    return props[property];
  });
  return (
    <div className="top-nav-bar__topic-list">
      {topicsArray.map((topic) => (
        <TopicListItem key={topic.id} slug={topic.slug} title={topic.title} />
      ))}
    </div>
  );
};

export default TopicList;
