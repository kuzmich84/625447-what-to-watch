import {loadFilmList, loadPromoFilm, redirectToRoute, requireAuthorization} from "./action";
import {AuthorisationStatus} from "../const";
import camelcaseKeys from "camelcase-keys";

export const fetchFilmList = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilmList(camelcaseKeys(data))));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorisationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch((err) => {
      throw err;
    });
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorisationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoFilm(camelcaseKeys(data))));
};
