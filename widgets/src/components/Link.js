import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // following if statement allows user to hold ctrl or cmd + click to open link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);
    //he doesn't explain the next two lines, just says to roll with it
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
