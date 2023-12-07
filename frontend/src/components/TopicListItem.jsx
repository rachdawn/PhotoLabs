import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, slug, title, getPhotoByTopic }) => {
  return (
    <div className="topic-list__item" key={id} data-slug={slug}>
      <span onClick={() => getPhotoByTopic(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
