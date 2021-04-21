import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {AuthorisationStatus as authorisationStatus} from "../../../const";

const initialState = {
  authorisationStatus: authorisationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state,
          {authorisationStatus: action.payload});
    default:
      return state;
  }
};

export default user;
