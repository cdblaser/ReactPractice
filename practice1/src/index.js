import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/* import var from node_modules or file. var is declared like any other var.
we import App from ./App, which we wrote. it is exported in ./App as well.
always import react and react-dom.
document.querySelector("#root") is used to place this file in the DOM root.
*/

// const App = () => {
//   return <div>Hi there!</div>
// }

const style1 = { backgroundColor: "red", color: "white" };
//console.log(style1);
ReactDOM.render(<App style={style1} />, document.querySelector("#root"));

/*
weird things when passing css (or objects in general) with props
1. if you want to pass in an object, it either has to have a key associated with the object (props.key.key.value) or you use {... } to assign key = key.value.
i.e. person = {name: 'Sam', age: 20}, pass in person so <App {...person} /> becomes <App name = "Sam" , age = 20 />.
or you can do <App person={person} /> ... but when you reference it in child component, then you must do <div person={props.person}
2. if you pass in just the prop value, it doesn't work because there is no associated key. 
i.e. if you do <App style={style1.backgroundColor} />, then call it with <button style={props}>, you're passing the following:
style.style1.backgroundColor... which equals "red". 
3. and if you pass in something like <App style={style1} />, where style1 = {backgroundColor: "red"}. and then do
<button style={props}, that will not work because you're essentially saying <button style={style} />, so style is showing up twice.
to fix this, you would do <button style={props.style} />, since that is actually passing in the html attributes. 

*/
