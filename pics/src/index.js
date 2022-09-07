import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

/*
when performing an API request, we are technically going to be using:
React App -> AJAX Client <--> Unsplash API
There are two ways to make network requests (i.e. the AJAX client):
1. axios. 3rd party, it's easier to implement. npm install --save axios
2. fetch. fetch is built in browser, but must code yourself and may make mistakes
*/

ReactDOM.render(<App />, document.querySelector("#root"));
