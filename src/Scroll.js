import React from "react";

// Every component has childern property use console.log to see that,  even though we did not pass props from the Scroll in App.js it knows abput it
const Scroll = props => {
  // console.log(props);
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
