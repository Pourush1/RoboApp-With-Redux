import { CHANGE_SEARCH_FIELD } from "./constants.js";

const initialState = {
  searchField: ""
};

//need to create a reducer, also giving a default state and action inside the bracket
export const searchRobots = (state = initialState, action = {}) => {
  //reducer runs on every action and says did CHANGESEARCHFIELD actions happen if that's the case I am goona return a new state

  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
