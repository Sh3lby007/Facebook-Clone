import React from "react";
import PostSender from "../PostSender/PostSender";
import StoryReel from "../StoryReel/StoryReel";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />

      <PostSender />
    </div>
  );
}

export default Feed;
