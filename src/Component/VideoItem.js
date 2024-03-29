import React from "react";
import "./VideoItem.css";
const videoItem = ({ video, videoSelect }) => {
  return (
    <div onClick={() => videoSelect(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default videoItem;
