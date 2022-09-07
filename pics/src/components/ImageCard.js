import React from "react";

//React Refs - work like documenty.querySelector, but for React. gives access
//to a single DOM element, can assign them in constructor, then pass as prop
//the ref tag is not an html attribute/DOM element. it's a jsx tag. it will
//eventually be turned into a DOM element.

//notice if you console.log(this.imageRef.current.clientHeight), the
//height is 0!? why? well, when you console.log(this.imageRef), the clientHeight
//is non-0... that's beacuse as SOON as you click an arrow in the console,
//it is pulling the info right then and there. not when it is first loaded.
//clientHeight = 0 is pulling the clientHeight before the image even loads, before
//the unsplash request finishes.
//to fix this, use addEventListener('load', callbackFxn());
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
