import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, slug, title }) => {
  return (
    <div className="topic-list__item" key={id} data-slug={slug}>
      <p>{title}</p>
    </div>
  );
};

export default TopicListItem;
