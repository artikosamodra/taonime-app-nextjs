"use client";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  //opts video
  const option = {
    width: "300",
    height: "200",
  };
  return (
    <section>
      <div>
        <YouTube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
        />
      </div>
    </section>
  );
};

export default VideoPlayer;
