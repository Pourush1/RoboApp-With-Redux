import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";

//Defined a state to communicate the robots from the CardList and the SearchField
//Get used to this syntax
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
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

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
