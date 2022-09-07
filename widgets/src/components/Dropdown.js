import React, { useState, useEffect, useRef } from "react";

/*
Some notes to accompany useRef:
When using event handlers like onClick, onSubmit, etc., they work within a scope.
So if you have a component and it uses onClick, onClick will only work within that
component. If you try to click elsewhere in the DOM, it will not work.

Event bubbling: when an event handler like onClick is invoked, React makes an 
Event Object. This object travels upwards (from child to parent) in the DOM until 
it reaches the top. During its journey, it looks for other event handlers 
and will invoke them.

However, there is something to note. Any event handler called from something
like addEventListener will get called BEFORE a React event handler.
We can see this when we console logged "body, item, dropdown" in that order.

useRef: we will use useRef to solve the issue above. We will set up a lifecycle
method that will rerender based on whether our ref being clicked is the body or
the Component we created.
*/

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
        <div style={{ color: selected.value }}>
          {selected.text ? selected.text : ""}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
