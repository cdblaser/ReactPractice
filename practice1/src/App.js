/*
<<<Deploy React App with Vercel>>>
1. create vercel account
2. in terminal, in project folder, npm install -g vercel
3. in project folder, type vercel
4. choose default for every question
5. text will show your URL
6. to update changes made, type vercel --prod

<<<Deploy React App with Netlify>>>
1. create github account
2. create new repository on github
3. in project folder, git add . 
4. git commit -m "message"
5. git remote add origin `repository name`
6. git push origin master
7. sign up for netlify with github
8. click new site from github
9. choose repository to link up
10. install, click on it
11. use default settings
12. to update changes, commit changes to git repository 
13. git status
14. git add . 
15. git commit -m "updated"
16. git push origin master
17. refresh page, should see changes

<<<General>>>
1. all jsx functions must have a return. it must return an html element.
2. className is used instead of class, although they both work, so as not to confuse with javascript's class.
3. double quotes must be used for html attributes while single quotes are used for jsx attributes.
4. attributes are written differently in jsx. they use double curly braces for css
5. we can use variables in js. look at how buttonText (str) and getButtonText (fn) are referenced in the return. 
6. keep in mind that curly braces to return a var do not make it an object.
7. objects CANNOT be references inside jsx specifically where you would normally show text.
8. instead, they can be referenced by their properties.
9. you can also pass objects in as an html attribute
10. one last thing - replace the 'for' html attribute with 'htmlFor'. it might confuse with for loop

<<<Component Nesting>>>
1. components can be shown inside of another
e.g.
<App>
  <App2/>
</App>

<<<Component Reusability>>>

<<<Component Configuration>>>


<<<props>>>
react props = just like attributes, but you can do way more because you can pass in anything.
for instance, you can pass in objects.
remember when parker passed in an object to the prop to pass data. it's the only way to pass data
e.g.
<MyElement prop1={object.name} />
(Props) => 
Props.prop1 // object.name
*/

// const getButtonText = () => {
//   return 'Click on me!';
// }

//below is a component. it's essentially a function that must return the jsx version of html elements.
//it can be referenced in index.js by doing <ComponentName />. Components are always capitalized.
//this is how react distinguishes between actual html elements and custom components.
//below, <button style={{backgroundColor: 'red'}}> is another way to write css in jsx.
//double curly braces are used because the first set is to tell React it's a variable,
//and the 2nd set are to create an object
import React from "react";

const App = (props) => {
  // const buttonText = "Click me!";
  // const buttonText2 = ["Hi", "There!"];
  // const buttonText3 = 123456;
  // const buttonText4 = [1, "hello"];
  // const buttonText5 = { text: "Click me!" };
  // //const style = { backgroundColor: "red", color: "white" };
  // const labelText = "Enter name!";
  // console.log(props.style);
  // return (
  //   <div>
  //     <label className="label" htmlFor="name">
  //       {labelText}
  //     </label>
  //     <input id="name" type="text" />
  //     <button style={props.style}>
  //       {buttonText}
  //       {buttonText2}
  //       {buttonText3}
  //       {buttonText4}
  //       {buttonText5.text}
  //       to submit
  //     </button>
  //   </div>
  // );

  const array1 = ["a", "b", "c"];

  const convertToSeconds = (item) => {
    const startSeconds = item + 1;
    const endSeconds = item + 2;

    return {
      start: startSeconds,
      end: endSeconds,
    };
  };
  convertToSeconds(array1);
  console.log(convertToSeconds(array1));

  const timespan = array1.map((item, i) => {
    const something = convertToSeconds(item);

    return `${something.start}`;
  });

  return <div>hello: {timespan}</div>;
};

export default App;
