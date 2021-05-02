import {createSelector} from 'reselect';


export const getFilms = ({DATA}) => DATA.films;
export const getGenre = ({DATA}) => DATA.genre;
export const getIsVideoPlayer = ({PLAYER}) => PLAYER.isVideoPlayer;
export const getAuthorisationStatus = ({USER}) => USER.authorisationStatus;
export const getAvatar = ({USER}) => USER.avatar;
export const getPromoFilm = ({PROMO}) => PROMO.promo;
export const getFilm = ({FILM}) => FILM.film;
export const getIsLoading = ({FILM}) => FILM.isLoading;
export const getReviews = ({REVIEWS}) => REVIEWS.reviews;
export const getIsLoadingReviews = ({REVIEWS}) => REVIEWS.isLoadingReview;
export const getIsSendReview = ({REVIEWS}) => REVIEWS.isSendReview;
export const getErrorSendReview = ({REVIEWS}) => REVIEWS.error;
export const getFilmListOfFavorite = ({FAVORITE}) => FAVORITE.favoriteFilms;


export const getFilmListOfGenreReselect = createSelector([getFilms, getGenre], (films, value) => {
  return films.filter((item) => item.genre === value);
});

export const getFilmListOfFavoriteReselect = createSelector(getFilms, (films) => {
  return films.filter((film) => film.isFavorite);
});

export const setGenresReselect = createSelector(getFilms, (films) => {
  let allGenres = [`All genres`];
  const setGenreList = new Set(films.map((film) => film.genre));
  setGenreList.forEach((item) => {
    allGenres.push(item);
  });
  return allGenres;
});

