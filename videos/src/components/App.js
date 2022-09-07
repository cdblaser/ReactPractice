import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
import "./VideoItem.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: "" };
  OnTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    console.log(this.state.videos);
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount() {
    this.OnTermSubmit("buildings");
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.OnTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <div className="scroller">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
