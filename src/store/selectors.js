import {createSelector} from 'reselect';


export const getFilms = ({DATA}) => DATA.films;
export const getFilmsOfGenre = ({DATA}) => DATA.filmsOfGenre;
export const getGenre = ({DATA}) => DATA.genre;
export const getIsVideoPlayer = ({PLAYER}) => PLAYER.isVideoPlayer;
export const getAuthorisationStatus = ({USER}) => USER.authorisationStatus;
export const getPromoFilm = ({PROMO}) => PROMO.promo;
export const getFilm = ({FILM}) => FILM.film;
export const getIsLoading = ({FILM}) => FILM.isLoading;
export const getReviews = ({REVIEWS}) => REVIEWS.reviews;
export const getIsLoadingReviews = ({REVIEWS}) => REVIEWS.isLoadingReview;
export const getIsSendReview = ({REVIEWS}) => REVIEWS.isSendReview;
export const getErrorSendReview = ({REVIEWS}) => REVIEWS.error;


export const getFilmListOfGenreReselect = createSelector([getFilms, getGenre], (films, value) => {
  return films.filter((item) => item.genre === value);
});


