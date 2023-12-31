import dynamic from "next/dynamic";
import { google } from "googleapis";

// Initialize the YouTube Data API client
const youtube = google.youtube({
  version: "v3",
  auth: "AIzaSyAq1AayYKbLcuchZ5KnOnC7bahs0WMwbZI",
});

export async function getServerSideProps(context) {
  try {
    // Get the live stream video ID from any YouTube channel
    const response = await youtube.search.list({
      part: "snippet",
      q: "SINACH",
      eventType: "live",
      type: "video",
      maxResults: 1,
    });

    if (response.data.items.length === 0) {
      throw new Error("No live stream video found");
    }

    const videoId = response.data.items[0].id.videoId;
    console.log("id", videoId);

    return {
      props: {
        videoId,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: `An error occurred: ${error.message}`,
      },
    };
  }
}

export default function VideoPage({ videoId }) {
  const YoutubePlayer = dynamic(() => import("youtube-player"), { ssr: false });

  return (
    <div>
      Hi
      <div id="player"></div>
      {videoId && <YoutubePlayer videoId={videoId} width="640" height="360" />}
    </div>
  );
}
