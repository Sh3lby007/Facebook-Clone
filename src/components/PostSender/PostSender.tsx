import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./PostSender.css";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";

function PostSender() {
  // used for main post
  const [input, setInput] = useState("");
  // used for image url
  const [imageUrl, setImageUrl] = useState("");
  /**
   * In Ts, when we use an event in a handler function, we need to provide a type for the event parameter.
   * This is bcause the etype of the event can vary depending on the element that triggered the event.
   * For e.g, a click event on a button vs a div element has different properties and methods. Without
   * specifying the event type, Ts could not infer the event type and assumed it as a generic 'Event'
   * object, which does not have the preventDefault() method.
   * Fixing this type error requires the React.MouseEvent type and specifying the element that is
   * triggering the MouseEvent
   */

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    // To prevent refreshing the page
    e.preventDefault();

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="postSender">
      <div className="postSender_top">
        <Avatar />

        <form>
          {/* onChange will fire off the event when user type in. */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="postSender_input"
            type="text"
            placeholder="What's on your mind?"
          />

          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="postSender_bottom">
        <div className="postSender_option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video </h3>
        </div>
        <div className="postSender_option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="postSender_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity </h3>
        </div>
      </div>
    </div>
  );
}

export default PostSender;
