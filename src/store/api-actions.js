import {
  loadAvatar,
  loadEmail, loadFavorite,
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
  api.get(`films`)
    .then(({data}) => dispatch(loadFilmList(camelcaseKeys(data))))
    .catch((err) => {
      throw err;
    });
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`login`)
    .then(() => dispatch(requireAuthorization(AuthorisationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch((err) => {
      throw err;
    });
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(`login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorisationStatus.AUTH)))
    .then(() => dispatch(fetchLogin()))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch((err) => {
      throw err;
    });
};

export const fetchLogin = () => (dispatch, _getState, api) => {
  api.get(`login`)
    .then(({data}) => {
      dispatch(loadEmail(data.email));
      dispatch(loadAvatar(data.avatar_url));
    })
    .catch((err) => {
      throw err;
    });
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  api.get(`films/promo`)
    .then(({data}) => dispatch(loadPromoFilm(camelcaseKeys(data))))
    .catch((err) => {
      throw err;
    });
};

export const fetchFilm = (filmId) => (dispatch, _getState, api) => {
  api.get(`films/${filmId}`)
    .then(({data}) => {
      dispatch(loadFilm(camelcaseKeys(data, {deep: true})));
    })
    .then(() => dispatch(setIsLoading(false)))
    .catch((err) => {
      throw err;
    });
  // .then(() => dispatch(activeId(parseInt(offerId, 10))))
  // })
};


export const fetchFilmReviews = (filmId) => (dispatch, _getState, api) => (
  api.get(`comments/${filmId}`)
    .then(({data}) => dispatch(loadReviews((camelcaseKeys(data, {deep: true})))))
    .then(() => dispatch(setIsLoadingReview(false)))
    .catch((err) => {
      throw err;
    })
);

export const commentPost = (filmId, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`comment/${filmId}`, {comment, rating})
    .then(() => dispatch(setIsSendReview(true)))
    .then(() => dispatch(fetchFilmReviews(filmId)))
    .then(() => dispatch(setIsSendReview(false)))
    // .then(() => dispatch(redirectToRoute(`/films/${filmId}`)))
    .catch(({response}) => {
      dispatch(setErrorReviews(response.status));
    })
);

export const fetchFavorite = () => (dispatch, _getState, api) => {
  api.get(`favorite`)
    .then(({data}) => dispatch(loadFavorite(camelcaseKeys(data))))
    .catch((err) => {
      throw err;
    });
};

export const postFavorite = (filmId, status) => (dispatch, _getState, api) => (
  api.post(`favorite/${filmId}/${status}`)
    .then(() => dispatch(fetchFilm(filmId)))
    .then(() => dispatch(fetchFavorite()))
    .then(()=>dispatch(fetchPromoFilm()))
    .catch((err) => {
      throw err;
    })
);

