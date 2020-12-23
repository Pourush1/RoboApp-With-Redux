import React from "react";

// USing destructuring to get the props object and grab its properties here from the App.js
const SearchBox = props => {
  const { placeholder, searchChange } = props;
  //using Tachyon class here
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder={placeholder}
        onChange={searchChange} // this event occurs when the value of an element has been changed
      />
    </div>
  );
};

export default SearchBox;
