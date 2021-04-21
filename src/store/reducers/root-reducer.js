import {combineReducers} from "redux";
import {filmData} from "./film-data/film-data";
import {player} from "./film-process/film-process";

export const NameSpace = {
  DATA: `DATA`,
  PLAYER: `PLAYER`,
};

export default combineReducers(
    {
      [NameSpace.DATA]: filmData,
      [NameSpace.PLAYER]: player,
    }
);

