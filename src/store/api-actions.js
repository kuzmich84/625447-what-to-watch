import {
  loadAvatar,
  loadEmail,
  loadFilm,
  loadFilmList,
  loadPromoFilm,
  loadReviews,
  redirectToRoute,
  requireAuthorization,
  setErrorReviews,
  setIsLoading,
  setIsLoadingReview,
  setIsSendReview
} from "./action";
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
  api.post(`login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorisationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const fetchLogin = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(({data}) => {
      dispatch(loadEmail(data.email));
      dispatch(loadAvatar(data.avatar_url));
    });
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  api.get(`films/promo`)
    .then(({data}) => dispatch(loadPromoFilm(camelcaseKeys(data))));
};
export const fetchFilm = (filmId) => (dispatch, _getState, api) => (
  api.get(`films/${filmId}`)
    .then(({data}) => {
      dispatch(loadFilm(camelcaseKeys(data, {deep: true})));
    })
    .then(() => dispatch(setIsLoading(false)))
  // .then(() => dispatch(activeId(parseInt(offerId, 10))))
  // })
);


export const fetchFilmReviews = (filmId) => (dispatch, _getState, api) => (
  api.get(`comments/${filmId}`)
    .then(({data}) => dispatch(loadReviews((camelcaseKeys(data, {deep: true})))))
    .then(() => dispatch(setIsLoadingReview(false)))
);

export const commentPost = (filmId, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`comments/${filmId}`, {comment, rating})
    .then(() => dispatch(setIsSendReview(true)))
    .then(() => dispatch(fetchFilmReviews(filmId)))
    .then(() => dispatch(setIsSendReview(false)))
    .then(() => dispatch(redirectToRoute(`/films/${filmId}`)))
    .catch(({response}) => {
      dispatch(setErrorReviews(response.status));
    })
);
