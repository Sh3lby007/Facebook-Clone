import Post from "../Post/Post";
import PostSender from "../PostSender/PostSender";
import StoryReel from "../StoryReel/StoryReel";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />

      <PostSender />

      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6r95UhkjoZVz71Lm9vbbSa7Qv99vEQOAzEvC7ZIBsA&s"
        message="yo waddup lads"
        timestamp="12.09am"
        username="Shelby zheng"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AkdFVtMH9I7r6U0a5lVF7gHaEo%26pid%3DApi&f=1&ipt=552e1032ddc5773c5628c15c2f808fec0eb2873d8b54bf12bff855170e3bc061&ipo=images"
      />
      <Post
        profilePic={""}
        image={""}
        username={""}
        timestamp={""}
        message={""}
      />
      <Post
        profilePic={""}
        image={""}
        username={""}
        timestamp={""}
        message={""}
      />
    </div>
  );
}

export default Feed;
