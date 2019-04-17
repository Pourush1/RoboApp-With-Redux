import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";

//Defined a state to communicate the robots from the CardList and the SearchField
//Get used to this syntax
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }
  //Creating a funtion so at anytime the searchbo gets triggered it will create a event
  onSearchChange = event => {
    //console.log(event.target.value); // this will always give you the text written in the search box
    this.setState({ searchfield: event.target.value });
    // console.log(filteredRobots);
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
