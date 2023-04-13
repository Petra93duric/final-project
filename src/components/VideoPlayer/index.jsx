import "./video.css";
import React from 'react'
import ReactPlayer from 'react-player/youtube'

function VideoPlayer() {
  return (
    <div className="VideoPlayer">
      <header className="VideoPlayer-header">
        <ReactPlayer url='https://www.youtube.com/watch?v=__jYIR6elFs' />

      </header>
    </div>
  );
}

export default VideoPlayer;