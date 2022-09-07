import React from "react";
//import Faker from "faker";

/*
Rules about passing props from parent to child components
1. it is possible to pass from child to parent, but indirectly
2. first argument for jsx child component is usually just 'props'
3. when defining props in parent or child, you are creating them right then.
if created but not using them in child, they will not show up in object.
if created in parent but not used in child, they will show up in object.
4. 

*/

const CommentDetail = (props) => {
  //console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author};
        </a>
        <div className="metadata">
          <span className="date">Today at {props.date}</span>
        </div>
        <div className="text">
          {" "}
          {props.text} {props.random}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
