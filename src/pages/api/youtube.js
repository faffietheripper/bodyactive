import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    // Initialize the YouTube Data API client
    const youtube = google.youtube({
      version: "v3",
      auth: "AIzaSyAq1AayYKbLcuchZ5KnOnC7bahs0WMwbZI",
    });

    // Query the API for videos
    const response = await youtube.search.list({
      part: "snippet",
      channelId: "UCToZNjyGOMOEN_GsGYM7kaQ",
      type: "video",
      maxResults: 50,
      order: "viewCount",
      pageToken: req.query.pageToken, // Add this line for pagination
    });

    // Process the API response and send it as the API response
    res.status(200).json(response.data.items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `An error occurred: ${error.message}` });
  }
}
