import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  return (
    <span className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          title={topic.title}
          getPhotoByTopic={props.getPhotoByTopic}
        />
      ))}
    </span>
  );
};

export default TopicList;
