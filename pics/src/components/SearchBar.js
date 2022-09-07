import React from "react";
/*
onInputChange changes anytime somebody changes their text input
notice that in <input>, calling onInputChange DOES NOT USE PARANTHESES
if we do use parantheses, it will be called whenever it is rendered.
so instead, leave parantheses off so it can be called some point in the future.
never put a set of parantheses on a callback fxn for an event handler.
nomenclature is to use 'event' as an object. contains all info about event
this is technically a callback fxn. in <input>, onChange is a special prop name.
event is a normal js object that contains all the info about the event that just occurred.
event.target.value is the one value that we care about for a text input.
some other useful props:
1. onClick - user clicks on something
2. onChange - user changes text in an input
3. onSubmit - user submits a form
onInputChange(), onInputClick(), etc. names are community convention
the only name that matters in React is the prop name (onClick, onChange, onSubmit)
event handlers are very important!
alternate event handler syntax - can handle onChange prop like:
onChange{(event) => console.log(event.target.value)}
arrow functions as a prop in onChange, etc. are appropriate if there isn't much functionality
uncontrolled vs controlled elements -
he refactored his code to be 'controlled'
flow:
1. user types input
2. callback gets invoked
3. we call setState with the new value
4. component rerenders
5. input is told what its value is (coming from state)
So, the new code is 'controlled' because it rerenders each time the user types a key.
The old code is 'uncontrolled' because the user is typing and it is not rerendering.
In order to figure out the value of the input RIGHT NOW, the user had to go into the
DOM and pull that information out of the HTML element. React World does NOT have that
info. React devs do not like to store data inside an HTML element. You want all your
data inside the React World.

*/

//elaborating on this
// when using this, it will, 95% of the time, be a reference to the object,
//function, or class that is in front of the period
//so in the example below, you'll see that truck.driveMyTruck(), when executed,
//actually outputs 'putputput' instead of 'vroom', even though the object's
//property driveMyTruck has value car.drive
// we can solve these context issues by using bind
//(the constructor was added after initial example). notice constructor doesn't
// invoke super() because it is not extending React.Component
class Car {
  constructor() {
    this.drive = this.drive.bind(this);
  }
  setDriveSound(sound) {
    this.sound = sound;
  }
  drive() {
    return this.sound;
  }
}
const car = new Car();
car.setDriveSound("vroom");
const truck = {
  sound: "putputput",
  driveMyTruck: car.drive,
};
truck.driveMyTruck();
const drive = car.drive;
drive();
//since there is nothing to the left of the period of drive(),
//'this' is undefined, because THERE IS NOTHING TO THE LEFT OF THE DOT!!!!!!!
//unless you use the keyword bind
//you can also use an arrow function instead of the default way of declaring fxn
//inside a class

//even though props is not explicitly passed as a parameter for classes,
//it still knows what props is
class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log("Input was clicked");
  }

  // onInputSubmit(event) {
  //   console.log("Form was submitted");
  // }

  //notice that onFormSubmit uses arrow function. that means 'this'
  // will always be equal to the this for SearchBar
  // arrow function is default method to fix the 'this' problem

  //he later adds this.props.onSubmit
  //making use of props in a class-based component.
  //make sure you understand this! this passes props from child to parent (hard!)
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit1(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* pay attention to below line. arrow function keeps value of 'this',
        but also has parantheses after fxn name to invoke it, since it will
        only run once */}
        <form
          onSubmit={(event) => this.onFormSubmit(event)}
          className="ui form"
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              // below line does not have parantheses to invoke fxn
              // only need reference to fxn
              onClick={this.onInputClick}
              // onSubmit={this.onInputSubmit}
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
                console.log(this.onInputChange);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
/* at end of search bar lesson, he points out that props can only be passed from parent to child, but now he wants to pass a prop from
child to parent. this is because he wants the api request to occur in App.js (so we need to pass the search query from SearchBar up to
  App.js. to be processed). he's going to do this with a callback fxn. He will turn App into a class, have a callback function that passes
  a method as a prop down to SearchBar. Then, whenever a search is performed, it's going to call that callback back with the search term.
  confusing, yes. we technically already did this with onSubmit and onChange (callback fxn that passes info from child back to parent)*/
