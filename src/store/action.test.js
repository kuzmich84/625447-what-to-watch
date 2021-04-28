import {
  ActionType,
  changeGenre, loadAvatar, loadEmail, loadFavorite,
  loadFilm,
  loadFilmList,
  loadPromoFilm,
  loadReviews,
  redirectToRoute,
  requireAuthorization, setErrorReviews,
  setIsLoading,
  setIsLoadingReview,
  setIsSendReview,
  showVideoPage
} from "./action";
import mockFilmList from "../mocks/films";
import mockReviews from "../mocks/films";
import {AuthorisationStatus} from "../const";

describe(`Action creators work correctly`, () => {
  it(`Action creator for load film list action `, () => {
    expect(loadFilmList(mockFilmList)).toEqual({
      type: ActionType.LOAD_FILM_LIST,
      payload: mockFilmList,
    });
  });

  it(`Action creator for change genre action`, () => {
    expect(changeGenre(`comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`,
    });
  });

  it(`Action creator for show video page action`, () => {
    expect(showVideoPage(true)).toEqual({
      type: ActionType.SHOW_VIDEO_PAGE,
      payload: true,
    });
  });

  it(`Action creator for require authorization action`, () => {
    expect(requireAuthorization(AuthorisationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorisationStatus.AUTH,
    });
  });

  it(`Action creator for redirect to route action`, () => {
    expect(redirectToRoute(`/login`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/login`,
    });
  });

  it(`Action creator for load promo film action`, () => {
    expect(loadPromoFilm(mockFilmList[1])).toEqual({
      type: ActionType.LOAD_PROMO_FILM,
      payload: mockFilmList[1],
    });
  });

  it(`Action creator for load film action`, () => {
    expect(loadFilm(mockFilmList[2])).toEqual({
      type: ActionType.LOAD_FILM,
      payload: mockFilmList[2],
    });
  });

  it(`Action creator for set is loading film action`, () => {
    expect(setIsLoading(false)).toEqual({
      type: ActionType.SET_IS_LOADING,
      payload: false,
    });
  });

  it(`Action creator for load reviews action`, () => {
    expect(loadReviews(mockReviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: mockReviews,
    });
  });

  it(`Action creator for set loading review action`, () => {
    expect(setIsLoadingReview(true)).toEqual({
      type: ActionType.SET_IS_LOADING_REVIEW,
      payload: true,
    });
  });

  it(`Action creator for set sending review action`, () => {
    expect(setIsSendReview(true)).toEqual({
      type: ActionType.SET_IS_SEND_REVIEW,
      payload: true,
    });
  });

  it(`Action creator for set error review action`, () => {
    expect(setErrorReviews(404)).toEqual({
      type: ActionType.SET_ERROR_REVIEWS,
      payload: 404,
    });
  });

  it(`Action creator for load email action`, () => {
    expect(loadEmail(`test@mail.ru`)).toEqual({
      type: ActionType.LOAD_EMAIL,
      payload: `test@mail.ru`,
    });
  });

  it(`Action creator for load avatar action`, () => {
    expect(loadAvatar(`img.jpeg`)).toEqual({
      type: ActionType.LOAD_AVATAR,
      payload: `img.jpeg`,
    });
  });

  it(`Action creator for load avatar action`, () => {
    expect(loadFavorite(mockFilmList[3])).toEqual({
      type: ActionType.LOAD_FAVORITE,
      payload: mockFilmList[3],
    });
  });
});
