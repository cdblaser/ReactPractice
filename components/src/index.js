import React from "react";
import ReactDOM from "react-dom";
import Faker, { random } from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
/*
components are the one thing in jsx that are returned with angle braces rather than curly braces
notice how <CommentDetail/> is nested inside <ApprovalCard/>. this makes <CommentDetail/> a child component
of <ApprovalCard/>. you can reference <CommentDetail/>'s props by using props.children.
props.children is very important to remember!

another note: props.children calls all children props between your component begin and end, not just one.
so you can do
<Children > {props.children} </Children>
and use it for
<App> 
  <Children>
    <div/>
    <span/>
    <a/>
  </Children>
</App>
and {props.children} will pull all 3 of those elements
*/

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>warning!</h4>Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="2:03am"
          text="hello. show me bobba and vagine"
          image={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          date="2:07pm"
          text="goodbye"
          image={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
