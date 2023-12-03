import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  console.log("props:", props);
  return (
    <div className="topic-list__item">
      <span className="topic-list__item" id={props.id} href={props.slug}>
        {props.title}
      </span>
    </div>
  );
};

export default TopicListItem;
