import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, slug, title }) => {
  return (
    <div className="topic-list__item" key={id} data-slug={slug}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
