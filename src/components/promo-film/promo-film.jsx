import React from "react";
import Header from "../header/header";
import {Link} from "react-router-dom";
import {getPromoFilm} from "../../store/selectors";
import {connect} from "react-redux";
import {showVideoPage} from "../../store/action";
import PropTypes from "prop-types";

const PromoFilm = ({promo, showVideoPageAction}) => {
  const {name, genre, released, backgroundImage, posterImage} = promo;

  function handlerShowVideoPage() {
    showVideoPageAction(true);
  }

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header/>

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
              <Link to="/mylist">
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  promo: getPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  showVideoPageAction(value) {
    dispatch(showVideoPage(value));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(PromoFilm);

PromoFilm.propTypes = {
  promo: PropTypes.object.isRequired,
  showVideoPageAction: PropTypes.func.isRequired,
};
