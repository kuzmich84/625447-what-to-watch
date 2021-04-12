import {extend} from "../utils";
import {ActionType} from "./action";
import Films from "../mocks/films";
import camelcaseKeys from "camelcase-keys";

const initialState = {
  genre: `All genres`,
  films: camelcaseKeys(Films),
  filmsOfGenre: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_FILM_LIST_OF_GENRE:
      return extend(state, {
        filmsOfGenre: action.payload
      });

    default:
      return state;
  }
};


