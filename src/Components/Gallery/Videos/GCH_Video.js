import "./GCHVideoStyles.css";
import React from "react";
import YouTube from "react-youtube";
import GCHLogo from "../../../Components/Assets/Navbar/gch_logo.png";
// install: npm install react-youtube

const GCH_Video = () => {
  const videoIds = [
    { id: "DgY91FiyXtg", startTime: 0 },
    { id: "ANrvweH-RZE", startTime: 0 },
    { id: "jfoQIlH65mE", startTime: 0 },
    { id: "oOOwJHLUKVY", startTime: 0 },
  ];

  const handleVideoClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div className="GCH-video-container">
      <div className="GCH-video-logo">
        <img src={GCHLogo} alt="GCH The Light Logo" />
      </div>

      <h1>GLOBAL CITIZENS FOR HUMANITY VIDEOS</h1>

      <p className="GCH-video-intro">
        Explore community programs organized by Global Citizens for Humanity as
        we continue to serve the Global Humanity.
      </p>

      <div className="video-container">
        {videoIds.map((video, index) => (
          <div key={index} className="video-card">
            <div className="video-embed">
              <YouTube
                videoId={video.id}
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 0,
                    start: video.startTime,
                  },
                }}
              />
            </div>

            <button
              className="youtube-link"
              onClick={() => handleVideoClick(video.id)}
            >
              Watch on YouTube
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GCH_Video;
