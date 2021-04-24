import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  favoriteFilms: [],
};

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE :
      return extend(state, {
        favoriteFilms: action.payload,
      });
    default:
      return state;
  }

};

export default favorite;
