import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: "" };
    this.imageRef = React.createRef();
  }
  //   componentDidMount() {
  //     this.imageRef.current.addEventListener("load");
  //   }
  render() {
    return (
      <div
        onClick={(e) => this.props.onVideoSelect(this.props.video)}
        className="video-item item"
      >
        <img
          className="ui image"
          ref={this.imageRef}
          alt={this.props.video.snippet.title}
          src={this.props.video.snippet.thumbnails.high.url}
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
export default VideoItem;
