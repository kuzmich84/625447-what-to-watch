export const ActionType = {
  CHANGE_GENRE: ` CHANGE_GENRE`,
  GET_FILM_LIST_OF_GENRE: `GET_FILM_LIST_OF_GENRE`,
  SHOW_VIDEO_PAGE: `SHOW_VIDEO_PAGE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};


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
