import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  film: {},
  isLoading: true,
  reviews: [],
  isLoadingReview: true,
  isSendReview: false,
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
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
    case ActionType.SET_IS_LOADING_REVIEW:
      return extend(state, {
        isLoadingReview: action.payload
      });
    case ActionType.SET_IS_SEND_REVIEW:
      return extend(state, {
        isSendReview: action.payload
      });
    default:
      return state;
  }
};

export default film;

