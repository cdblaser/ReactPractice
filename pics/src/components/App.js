import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
//notice he does not capitalize axios. this is convention :shrug:

class App extends React.Component {
  state = { images: [] };
  //this is a callback fxn used to pass props from child to parent. very important!
  //make sure you understand this (note: this is technically passing state from child to parent)

  //the .then after axio.get - let's you chain a command that responds after axios.get completes
  //.then only works with a 'promise' - axios reaches out to unsplash, must wait for response.
  //To get notification when request completes, use a promise. a promise is an object
  //that gives a notification when some amount of work is completed.
  //to get a tap on the shoulder when request is completed, use .then

  //An alternate method to .then - async and await.
  //async and await are very easy to use
  //Just put async keyword in front of method
  //Then put await keyword in front of whatever response you're waiting to get.
  //Also, assign the await to a variable so that you can do stuff with it
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, pages: 2 },
    });
    // .then((response) => {
    //   console.log(response.data.results);
    // });
    this.setState({ images: response.data.results });
  };
  // point out that when using onSubmit, onChange, etc. with non-React components, you have to call them that.
  // but with a React component, it can be called whatever you want. he just calls it 'onSubmit' because he likes it
  // so the takeaway is the below prop, onSubmit, is not the same as the function 'onSubmit' for forms
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit1={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
