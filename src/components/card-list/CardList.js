import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "../card/Card";

//const CardList = ({ robots }) => {

class CardList extends Component {
  render() {
    const { robots } = this.props;
    //console.log(robots);
    return (
      <div>
        {robots.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
            />
          );
        })}
      </div>
    );
  }
}

CardList.propTypes = {
  robotsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string
    })
  )
};

export default CardList;
