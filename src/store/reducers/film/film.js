import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  film: {},
  isLoading: true,
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return extend(state, {
        film: action.payload
      });
    case ActionType.SET_IS_LOADING:
      return extend(state, {
        isLoading: action.payload
      });
    default:
      return state;
  }
};

export default film;

