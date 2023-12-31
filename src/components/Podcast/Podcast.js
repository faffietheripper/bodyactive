"use client";

import { useEffect, useState } from "react";

const Podcast = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/youtube") // Replace with the URL of your API route
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      Podcast Videos
      <div className="grid grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className={`col-span-${index === 0 ? "3" : "1"}`}>
            <iframe
              width="300"
              height="300"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
