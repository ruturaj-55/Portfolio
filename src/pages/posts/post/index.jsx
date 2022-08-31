import React from "react";

import "./style.css";

const PostComponenent = (props) => {
  const data = props.data;
  return (
    <div className="po_item">
      <img src={data.img} alt="" />
      <div className="content">
        <p>{data.desctiption}</p>
        <a href="posts/789456123">view project</a>
      </div>
    </div>
  );
};

export default PostComponenent;
