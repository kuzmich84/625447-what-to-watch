export const ActionType = {
  CHANGE_GENRE: ` CHANGE_GENRE`,
  GET_FILM_LIST_OF_GENRE: `GET_FILM_LIST_OF_GENRE`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmListOfGenre: (films) => ({
    type: ActionType.GET_FILM_LIST_OF_GENRE,
    payload: films
  })
};
