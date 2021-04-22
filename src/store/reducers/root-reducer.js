import {combineReducers} from "redux";
import {filmData} from "./film-data/film-data";
import {player} from "./film-process/film-process";
import user from "./user/users";
import promo from "./promo/promo";

export const NameSpace = {
  DATA: `DATA`,
  PLAYER: `PLAYER`,
  USER: `USER`,
  PROMO: `PROMO`,
};

export default combineReducers(
    {
      [NameSpace.DATA]: filmData,
      [NameSpace.PLAYER]: player,
      [NameSpace.USER]: user,
      [NameSpace.PROMO]: promo,
    }
);

