import React, { Component } from "react";
import CardList from "../components/card-list/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import { connect } from "react-redux";
import { setSearchField } from "../actions";

// mapStateToProps is tell me what piece of state I need to listen to and send it out as props
const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

//mapDispatchToProps say hey tell me what props I need to listen to that are actions that I need to dispatch
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

//Defined a state to communicate the robots from the CardList and the SearchField
//Get used to this syntax
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
      // searchfield: ""
    };
  }

  //Promise object reprsents the eventual completion or failire of an asynchronous operation.
  componentDidMount() {
    //we are getting the state from the index.js file passing the state whiche we are getting from reducer

    // console.log(this.props.store.getState());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      })
      .catch(error => {
        console.log(error);
      });
  }
  //Creating a funtion so at anytime the searchbo gets triggered it will create a event
  // onSearchChange = event => {
  //   //console.log(event.target.value); // this will always give you the text written in the search box
  //   this.setState({ searchfield: event.target.value });
  //   // console.log(filteredRobots);
  // };

  render() {
    const { robots } = this.state; // This is destructuring
    const { searchField, onSearchChange } = this.props; //after doing redux searchChange comes from this.props. mapStateToPtops
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>

          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App); //give these props and actions to APP
