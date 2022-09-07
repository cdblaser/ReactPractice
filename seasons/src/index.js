import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
/*
in this exericise, we will learn about classes and how they differ from functions.
we are attempting to pull location data, but our page renders before location data is pulled.
we need to use classes and states in order to render the page and location data properly
States are challenging, but once mastered you can basically make whatever you want
Rules of State:
1. only usable with class components (technically can be used with functional components with Hook system)
2. you will confuse props with state :(. very easy to get mixed up
3. 'State' is a JS object that contains data relevant to a single component. Strictly relevant to only this component.
4. Updating 'state' on a component causes the component to (almost) instantly rerender
5. State must be initialized when a component is first created
6. IMPORTANT: State can ONLY be updated using the function 'setState'!!

when making a class in react, classes usually expect many methods.
by extending React.Component, it borrows a ton of methods from React.Component
we are subclassing from React.Component
note: i don't know how window.navigator.geolocation works
React says we have to define render
However, constructor is something special. React doens't require it, but it is special to JS
A constructor is the very first function that is called whenever an instance of a class is created
What about super(props)? super(props) is related to the React.Component. React.Component has a constructor function of its own.
React.Component's constructor function has to go through some setup with some code in order to set up React.Component.
When we define constructor inside App class, we are overriding/replacing the constructor function inside React.Component
But we still want React.Component's constructor setup, so we call super(props). Props must be the parameter inside super.
Essentially, super(props) is just a reference to the parent's (React.Component) constructor function
super(props) will always be 1st thing underneath constructor
this.state - need more info on this... but essentially we initialize state with an object
is this.state an object? we are allowed to use state anywhere inside App component now.
You reference this.state using... dun dun dun, this.state (look at this.state.lat)
lat is defined as null, because if you have a number and you don't know what it is yet, you can define it as null
render() is going to be called all the dang time, so don't initialize a request as a call inside render()

don't forget - a callback function is a function passed into another function as an argument and can be invoked (a)synchronously

lifecycle - 
1. constructor - recommended to not load data in here, although you can
2. render
3. componentDidMount - perfect place to load some data
  it is considered best practice to load data in this function
4. rerender (this.setState)
5. componentDidUpdate - good place to do more data-loading, click a button, input text, get new props/state
6. componentWillUnmount - doesn't get used quite as often, usually used for cleanup
other lifecycle methods - RARELY USED! don't need to know yet
1. shouldComponentUpdate
2. getDerivedStateFromProps
3. getSnapshotBeforeUpdate
*/
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: "" };
  // }
  //line below is exactly equivalent to have this.state inside constructor fxn
  //that's because of babel. it LITERALLY creates a constructor and puts state in there. check babeljs.io
  //no need to type constructor, super, this.state. just use the line below!!!
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // in order to update state, WE CALLED setState!!!!!
      // WE DID NOT USE this.state.lat = position.coords.latitude
      // YOU NEVER, EVER DO THIS! the ONLY time you do a direct assignment to state is the initial assignment
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        //console.log(position);
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //renderContent() {} is a helper function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  //setState causes render() to rerender
  //never send a request in render(). it's only for returning jsx
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
