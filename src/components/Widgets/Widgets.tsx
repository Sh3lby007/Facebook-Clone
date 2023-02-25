import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=774958779548744"
        width="340"
        height="100%"
        data-tabs="timeline,events,messages"
        style={{ border: "none", overflow: "hidden" }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default Widgets;
