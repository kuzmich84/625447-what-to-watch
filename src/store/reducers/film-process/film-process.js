import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  isPromo: false,
};

export const player = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IS_PROMO:
      return extend(state, {
        isPromo: action.payload,
      });

    default:
      return state;
  }
};
