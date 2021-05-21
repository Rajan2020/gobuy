import React from "react";
import "./VideoDetail.css";
const videoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe src={videoSrc} />
        </div>
        <h4 className="ui header header-style">{video.snippet.title}</h4>
        <div className="description">
          <h4>Description </h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};
export default videoDetail;
