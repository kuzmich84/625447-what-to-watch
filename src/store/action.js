export const ActionType = {
  CHANGE_GENRE: ` CHANGE_GENRE`,
  GET_FILM_LIST_OF_GENRE: `GET_FILM_LIST_OF_GENRE`,
  SHOW_VIDEO_PAGE: `SHOW_VIDEO_PAGE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_FILM_LIST: `LOAD_FILM_LIST`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
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
