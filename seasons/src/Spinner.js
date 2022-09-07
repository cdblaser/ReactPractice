import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">
        {props.message || "Loading..."}
      </div>
    </div>
  );
};

// props.defaultProps - if you forget to pass in a prop, you can have a default prop
//defaultProps is the same as doing {props.message || "Loading..."}
//defaultProps takes precedence over {props.message || "Loading..."}
Spinner.defaultProps = {
  message: "Loading2...",
};

export default Spinner;
