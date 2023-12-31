"use client";

import React, { useEffect, useState } from "react";

const IGPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/instagram");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.mediaUrl} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default IGPosts;
