import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  OnFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  OnInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  OnInputClick = (event) => {
    console.log("clicked search bar");
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.OnFormSubmit} className="ui form">
          <div className="field">
            <label>Youtube Video Search Bar!</label>
            <input
              className="prompt"
              type="text"
              placeholder="Input text..."
              value={this.state.term}
              onChange={this.OnInputChange}
              onClick={this.OnInputClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
