import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); // note that the null value is ONLY when you first load. rerendering will never cause
  //the value to go back to null.
  //The above destructure assignment assigns activeIndex to useState[0] and setActiveIndex to useState[1]
  //Another example is:
  //const things = useState(null);
  //const activeIndex = things[0];
  //const setActiveIndex = things[1];
  //Anyways: activeIndex is the element that you're trying to keep track of. value will change over time
  //setActiveIndex is a function that will update piece of state and works just like in classes where
  //entire component will re-render
  //useState has one argument, and that is the initial value of the state
  //Class vs function:
  //state = {activeIndex: 0} -> useState(0);
  //this.state.activeIndex -> activeIndex;
  //this.setState({activeIndex: 10}) -> setActiveIndex(10);
  //You can keep track of multiple states at the same time. here's how you do it:
  //const [activeIndex, setActiveIndex] = useState(0);
  //const[term, setTerm] = useState("");
  //activeIndex; term;
  //setActiveIndex(10); setTerm("search");
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    //React.Fragment lets you wrap multiple elements without adding to the DOM (adding an extra div)
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={(e) => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
