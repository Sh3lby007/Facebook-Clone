import { Avatar } from "@mui/material";
import React from "react";
import "./Story.css";

interface StoryProps {
  image: string;
  profileSrc: string;
  title: string;
}
function Story({ image, profileSrc, title }: StoryProps) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story_avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
