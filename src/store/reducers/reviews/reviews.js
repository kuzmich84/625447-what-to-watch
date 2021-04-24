import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  reviews: [],
  isLoadingReview: true,
  isSendReview: false,
  error: null,
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.SET_ERROR_REVIEWS:
      return extend(state, {
        error: action.payload,
      });
    default:
      return state;
  }
};

export default reviews;

