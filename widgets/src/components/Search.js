import React, { useState, useEffect } from "react";
import axios from "axios";
/*
Introducing useEffect:
useEffect is very similar to the lifecycle methods (componentDidMount, etc.).
Here are the three cases:
1. When component is rendered for first time only
2. When component is rendered for first time and whenever it rerenders
3. When component is rendered for first time and (whenever it rerenders and
when some piece of data has changed). Boolean 'and' is important

To tell useEffect which of the 3 above, you use:
1. empty array - run at initial render
2. nothing at all - run at initial render, and after every rerender
3. non-empty array - run at initial render, and run after every rerender IF
data has changed since last render 
...as an argument for the 2nd parameter of useEffect. 1st parameter is always fxn,
2nd parameter is ALWAYS one of the above. can't be object, another fxn, etc.

NOTE: you cannot use async/await directly with useEffect. 3 solutions:
1. make helper fxn then call it immediately
2. make immediately invoked anonymous helper fxn (same runtime-wise as #1)
3. use normal promises (.then((response) => {console.log(response.data)}))

We are going to use useEffect to search terms on Wikipedia API so we can 
automatically search in the searchbar without hitting a button to search.
Also, it will allow us to use other search parameters besides just the keyword.

useEffect() can only return() => {} ONE thing: a function. 
Notice return doesn't get called immediately when useEffect is initially called.
This is because EVERYTHING in useEffect() is called first (for initial render).
And by everything I mean what's in the arrow function.
When useEffect is called for rerender, the return from the PREVIOUS useEffect()
is called first, e.g.
1. Initial Component Render -> 
a. fxn provided to useEffect() called
b. Return a cleanup fxn
2. Rerender ->
a. Invoke cleanup fxn
b. Fxn provided to useEffect() called
c. Return a cleanup fxn
3. Rerender -> same as above
*/
const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  // useEffect(() => {
  //   const search = async () => {
  //     const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
  //       params: {
  //         action: "query",
  //         list: "search",
  //         origin: "*",
  //         format: "json",
  //         srsearch: term,
  //       },
  //     });
  //     setResults(data.query.search);
  //   };

  //   if (term && !results.length) {
  //     search();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 500);

  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  //   //If you have two items in the dependency array below, specifically for this setup, it may
  //   //send a network request twice (because results.length is updating after render, so it rerenders).
  //   //Is it worth putting results.length in here to get rid of console warning? Generally, yes.
  //   //But how can we get rid of this bug (double fetching)?
  // }, [term, results.length]);

  // dangerouslySetInnerHTML sets you up for an XSS attack! do not use
  //(except this one time to get rid of the <span> in wiki api description)
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            target="_blank"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });

  const searchBar = () => {
    return (
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (!term) {
      return <div>Enter search term!</div>;
    }
    if (results.length == 0) {
      console.log("results null");
      return <div>no results</div>;
    } else {
      return <div className="ui celled list">{renderedResults}</div>;
    }
  };

  return (
    <div>
      {searchBar()} {renderContent()}
    </div>
  );
};

export default Search;
