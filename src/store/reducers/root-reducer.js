import {combineReducers} from "redux";
import {filmData} from "./film-data/film-data";
import {player} from "./film-process/film-process";
import user from "./user/users";
import promo from "./promo/promo";
import film from "./film/film";
import reviews from "./reviews/reviews";
import favorite from "./favorite/favorite";

export const NameSpace = {
  DATA: `DATA`,
  PLAYER: `PLAYER`,
  USER: `USER`,
  PROMO: `PROMO`,
  FILM: `FILM`,
  REVIEWS: `REVIEWS`,
  FAVORITE: `FAVORITE`
};

export default combineReducers(
    {
      [NameSpace.DATA]: filmData,
      [NameSpace.PLAYER]: player,
      [NameSpace.USER]: user,
      [NameSpace.PROMO]: promo,
      [NameSpace.FILM]: film,
      [NameSpace.REVIEWS]: reviews,
      [NameSpace.FAVORITE]: favorite,
    }
);

