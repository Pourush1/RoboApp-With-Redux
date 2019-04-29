import React from "react";
import { shallow } from "enzyme";
import CardList from "../components/CardList";
import checkPropTypes from "check-prop-types";

const filteredRobots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  }
];

describe("CardList Component", () => {
  //SnapShot Testing
  describe("Doing Snapshot Testing", () => {
    test("renders without crashing", () => {
      expect(shallow(<CardList robots={filteredRobots} />)).toMatchSnapshot();
    });
  });

  // Props Testing
  describe("Props Testing", () => {
    test("when provided with an array of Cards", () => {
      const cards = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv"
        }
      ];
      const CardListInstance = shallow(<CardList robots={cards} />);

      CardListInstance.find("Card").forEach(cardInstance => {
        const cardProps = cardInstance.props();
        const matchingCards = cards.find(card => card.id === cardProps.id);
        expect(cardProps.name).toBe(matchingCards.name);
      });
    });
  });

  // Checking prototypes
  describe("Checking PropTypes", () => {
    test("Should not throw a warning", () => {
      const expectedProps = {
        robotsArray: [
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
          }
        ]
      };
      const propsErr = checkPropTypes(
        CardList.propTypes,
        expectedProps,
        "props",
        CardList.name
      );
      expect(propsErr).toBeUndefined();
    });
  });
});
