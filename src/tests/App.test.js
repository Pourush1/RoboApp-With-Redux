import React from "react";
import { shallow } from "enzyme";
import App from "../containers/App";

test("App should fetch a list of Users", () => {
  const fetchSpy = jest.spyOn(window, "fetch");
  const usersInstance = shallow(<App />);
  expect(fetchSpy).toHaveBeenCalledTimes(1);
  expect(fetchSpy).toBeCalled();
});
