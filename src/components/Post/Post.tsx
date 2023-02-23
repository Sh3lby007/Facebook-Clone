import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMore,
  NearMe,
  ThumbUp,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./Post.css";

interface PostProps {
  profilePic: string;
  image: string;
  username: string;
  timestamp: string;
  message: string;
}
function Post({ profilePic, image, username, timestamp, message }: PostProps) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>Timestamp..</p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>

      <div className="post_image">
        <img src={image} />
      </div>

      <div className="post_options">
        <div className="post_option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircle />
          <ExpandMore />
        </div>
      </div>
    </div>
  );
}

export default Post;
