export const ActionType = {
  CHANGE_GENRE: ` CHANGE_GENRE`,
  GET_FILM_LIST_OF_GENRE: `GET_FILM_LIST_OF_GENRE`,
};

export const ActionCreator = {
  changeGenre: () => ({
    type: ActionType.CHANGE_GENRE,
    payload: `comedy`,
  }),
  getFilmListOfGenre: () => ({
    type: ActionType.GET_FILM_LIST_OF_GENRE,
    payload: []
  })
};
