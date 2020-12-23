import React from "react";
import { shallow } from "enzyme";
import Card from "../components/card/Card";

const setUp = (props = {}) => {
  const component = shallow(<Card {...props} />);
  // console.log(component.debug());
  return component;
};

describe("Card Component", () => {
  //Snapshot Testing
  describe("Snapshot Testing", () => {
    test("CardComponent renders without crashing", () => {
      expect(shallow(<Card />)).toMatchSnapshot();
    });
  });

  //Functional Testing
  describe("Card Component", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    test("Should render without errors", () => {
      const wrapper = component.find("#cardComponent");
      expect(wrapper.length).toBe(1);
    });

    test("Should render an image", () => {
      const image = component.find("#robotImage");
      expect(image.length).toBe(1);
    });

    test("Should render without errors", () => {
      const wrapper = component.find("#nameEmail");
      expect(wrapper.length).toBe(1);
    });

    test("Should render a H2", () => {
      const h2 = component.find("#name");
      expect(h2.length).toBe(1);
    });

    test("Should render a paragraph", () => {
      const paragraph = component.find("#email");
      expect(paragraph.length).toBe(1);
    });
  });
});

// test("CardComponent when provided with an empty array of Cards", () => {
//   const card = shallow(<Card cardProperties={[]} />);
//   expect(card).toContainReact(
//     <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//       <img alt="robots" src={`https://robohash.org/undefined?size=200x200`} />
//       <div>
//         {/* <h1></h1> */}
//         <p />
//       </div>
//     </div>
//   );
// });

// test("Does not contain any <img> elements", () => {
//   const card = shallow(<Card cardproperties={[]} />);
//   expect(card.find("img", ""));
// });

// test("Does not contain any paragraph elements", () => {
//   const card = shallow(<Card cardProperties={[]} />);
//   expect(card.text()).toEqual("");
// });

// test("when provided with an array of cardProperties", () => {
//   const obj = [{ id: 1, email: "pourushshrestha@gmail.com" }];
//   const card = shallow(<Card cardProperties={obj} />);
//   expect(card.find("div".length).toEqual(obj.length));
// });
