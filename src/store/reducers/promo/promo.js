import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  promo: {}
};

const promo = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promo: action.payload});
    default:
      return state;
  }
};

export default promo;
