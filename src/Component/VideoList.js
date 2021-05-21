import React from "react";
import VideoItem from "./VideoItem";
const videoList = ({ videos, videoSelect }) => {
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        videoSelect={videoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};
export default videoList;
