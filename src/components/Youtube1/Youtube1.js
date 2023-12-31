"use client";

import { useEffect, useState } from "react";

const Youtube1 = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/youtube") // Replace with the URL of your API route
      .then((response) => response.json())
      .then((data) => setVideos(data.items || [])) // Assuming 'items' is the key containing video data
      .catch((error) => console.error(error));
  }, []);

  // Assuming 'podcastPlaylistId' is the ID of the playlist associated with podcasts
  const podcastPlaylistId = "PLIS5BXuTn7Fb6WTKAAirQ00MEuOEjFi2C";

  const isPodcast = (video) => {
    const playlistId = video.snippet?.playlistId; // Use optional chaining to avoid errors if 'snippet' is undefined
    return playlistId === podcastPlaylistId;
  };

  const nonPodcastVideos = videos.filter((video) => !isPodcast(video));
  console.log("nonPodcast videos:", nonPodcastVideos);

  return (
    <div>
      <h2>Youtube Videos (Excluding Podcasts)</h2>
      <div className="grid grid-cols-3 gap-6">
        {nonPodcastVideos.map((video, index) => (
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

export default Youtube1;
