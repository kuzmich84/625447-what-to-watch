import camelcaseKeys from "camelcase-keys";
import Films from "../../../mocks/films";
import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  genre: `All genres`,
  films: camelcaseKeys(Films),
  filmsOfGenre: [],
};

export const filmData = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_FILM_LIST_OF_GENRE:
      return extend(state, {
        filmsOfGenre: action.payload,
      });

    default:
      return state;
  }
};
