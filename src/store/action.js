export const ActionType = {
  CHANGE_GENRE: ` CHANGE_GENRE`,
  GET_FILM_LIST_OF_GENRE: `GET_FILM_LIST_OF_GENRE`,
  SHOW_VIDEO_PAGE: `SHOW_VIDEO_PAGE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_FILM_LIST: `LOAD_FILM_LIST`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FILM: `LOAD_FILM`,
  SET_IS_LOADING: `SET_IS_LOADING`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_IS_LOADING_REVIEW: `SET_IS_LOADING_REVIEW`,
  SET_IS_SEND_REVIEW: `SET_IS_SEND_REVIEW`,
  SET_ERROR_REVIEWS: `GET_ERROR_REVIEWS`,
  LOAD_EMAIL: `GET_EMAIL`,
  LOAD_AVATAR: `LOAD_AVATAR`,
  LOAD_FAVORITE: `LOAD_FAVORITE`,
};

export const loadFilmList = (data) => ({
  type: ActionType.LOAD_FILM_LIST,
  payload: data,
});

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});
export const getFilmListOfGenre = (films) => ({
  type: ActionType.GET_FILM_LIST_OF_GENRE,
  payload: films
});

export const showVideoPage = (value) => ({
  type: ActionType.SHOW_VIDEO_PAGE,
  payload: value,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
export const loadPromoFilm = (promoFilm) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: promoFilm,
});

export const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film,
});

export const setIsLoading = (bool) => ({
  type: ActionType.SET_IS_LOADING,
  payload: bool,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const setIsLoadingReview = (bool) => ({
  type: ActionType.SET_IS_LOADING_REVIEW,
  payload: bool,
});

export const setIsSendReview = (bool) => ({
  type: ActionType.SET_IS_SEND_REVIEW,
  payload: bool,
});

export const setErrorReviews = (bool) => ({
  type: ActionType.SET_ERROR_REVIEWS,
  payload: bool,
});

export const loadEmail = (email) => ({
  type: ActionType.LOAD_EMAIL,
  payload: email,
});

export const loadAvatar = (avatar) => ({
  type: ActionType.LOAD_AVATAR,
  payload: avatar,
});

export const loadFavorite = (favorites) => ({
  type: ActionType.LOAD_FAVORITE,
  payload: favorites,
});

