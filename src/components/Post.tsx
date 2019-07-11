import React from "react";

export const Post = (props: {
  headline: string;
  subheadline: string;
  category: string;
  date: string;
  readingLength: number;
  content: string;
}) => {
  return (
    <div className="PostWrapper">
      <div className="Post">
        <div className="PostHeader">
          <h2 style={{ color: "#ffa3d5" }}>{props.headline}</h2>
          <h3 style={{ color: "gray" }}>{props.subheadline}</h3>
          <div className="PostSubHeader">
            <small style={{ color: "gray", paddingRight: "20px" }}>
              {props.date}
            </small>
            <small style={{ color: "gray", paddingRight: "20px" }}>
              Length: {props.readingLength} min
            </small>
            <small style={{ color: "gray" }}>Category: {props.category}</small>
          </div>
        </div>

        {/* <div className="PostBody">
          <p style={{ color: "gray" }}>{props.content}</p>
        </div> */}
      </div>
    </div>
  );
};
