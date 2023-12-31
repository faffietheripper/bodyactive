import axios from "axios";

export default async function handler(req, res) {
  try {
    // Instagram API endpoint
    const apiUrl = "https://graph.instagram.com/me/media";

    // Instagram API credentials
    const access_token =
      "IGQWRPTWp4SnF5SzNUVXJqLXJ4clVMSm1NY3o2N0duZAjZAkSjZABZAGpBTVZAlTEJYS1cyTE1GTDFwd0tmM0o2OEpORkVZAbVdMSDRTeUJMMGx4aWN0ZAC10LXVHQzkzZAGJPcU90TzgwYWtSMS1BWmZAncHR6aGI0NmN6Sm8ZD";

    // Fetch posts from Instagram API
    const response = await axios.get(apiUrl, {
      params: {
        fields: "caption,media_url,permalink,timestamp",
        access_token: access_token,
      },
    });

    // Extract relevant information from the API response
    const posts = response.data.data.map((post) => ({
      id: post.id,
      caption: post.caption,
      mediaUrl: post.media_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
    }));

    // Return the posts as a JSON response
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
