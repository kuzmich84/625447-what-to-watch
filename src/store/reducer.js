import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  genre: `All`,
  films: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_FILM_LIST_OF_GENRE:
      return extend(state, {
        films: action.payload
      });

    default:
      return state;
  }
};


