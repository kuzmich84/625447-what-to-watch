import React from "react";
import Header from "../header/header";
import {getAuthorisationStatus, getPromoFilm} from "../../store/selectors"
import {connect} from "react-redux";
import {showVideoPage} from "../../store/action";
import PropTypes from "prop-types";
import AddMyListContainer from "../add-my-list/add-my-list-container";
import {postFavorite} from "../../store/api-actions";
import {AuthorisationStatus} from "../../const"

const PromoFilm = ({promo, showVideoPageAction, postFilmFavorite, authorizationStatus}) => {
  const {name, genre, released, backgroundImage, posterImage, isFavorite, id} = promo;

  function handlerShowVideoPage() {
    showVideoPageAction(true);
  }

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header page={`main`}/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name}
              width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={handlerShowVideoPage}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              {authorizationStatus === AuthorisationStatus.AUTH && <AddMyListContainer filmId={id} isFavorite={isFavorite} postFilmFavorite={postFilmFavorite}/> }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  promo: getPromoFilm(state),
  authorizationStatus: getAuthorisationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  showVideoPageAction(value) {
    dispatch(showVideoPage(value));
  },
  postFilmFavorite(filmId, status) {
    dispatch(postFavorite(filmId, status));
  }
});
export {PromoFilm};
export default connect(mapStateToProps, mapDispatchToProps)(PromoFilm);

PromoFilm.propTypes = {
  promo: PropTypes.object.isRequired,
  showVideoPageAction: PropTypes.func.isRequired,
  postFilmFavorite: PropTypes.func.isRequired,
};
