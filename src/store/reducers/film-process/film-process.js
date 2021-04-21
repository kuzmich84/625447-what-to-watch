import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  isVideoPlayer: false,
};

export const player = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_VIDEO_PAGE:
      return extend(state, {
        isVideoPlayer: action.payload,
      });

    default:
      return state;
  }
};
