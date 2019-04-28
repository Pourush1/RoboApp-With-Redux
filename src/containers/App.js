import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

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

  //Promise object reprsents the eventual completion or failire of an asynchronous operation.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        // console.log(users);
        this.setState({ robots: users });
        //console.log(robots);
      })
      .catch(error => {
        console.log(error);
      });
  }
  //Creating a funtion so at anytime the searchbo gets triggered it will create a event
  onSearchChange = event => {
    //console.log(event.target.value); // this will always give you the text written in the search box
    this.setState({ searchfield: event.target.value });
    // console.log(filteredRobots);
  };

  render() {
    const { robots, searchfield } = this.state; // This is destructuring
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!robots.length) {
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
