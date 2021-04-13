export const ActionType = {
  CHANGE_GENRE: ` CHANGE_GENRE`,
  GET_FILM_LIST_OF_GENRE: `GET_FILM_LIST_OF_GENRE`,
  SHOW_VIDEO_PAGE: `SHOW_VIDEO_PAGE`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmListOfGenre: (films) => ({
    type: ActionType.GET_FILM_LIST_OF_GENRE,
    payload: films
  }),
  showVideoPage: (value) => ({
    type: ActionType.SHOW_VIDEO_PAGE,
    payload: value,
  })
};
