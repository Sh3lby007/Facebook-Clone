import Story from "./Story";
import "./StoryReel.css";

const img =
  "https://thepreviewapp.com/wp-content/uploads/2020/09/instagram-reel-ideas-for-business-4.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon Deve3"
      />
    </div>
  );
}

export default StoryReel;
