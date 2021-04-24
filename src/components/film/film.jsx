import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Tabs from "../tabs/tabs";
import Overview from "../tabs/overview/overview";
import Details from "../tabs/details/details";
import Reviews from "../tabs/reviews/reviews";
import FilmsList from "../films-list/films-list";
import withActiveTab from "../../hocs/withActiveTab";
import MainVideoPlayer from "../main-videoplayer/main-videoplayer";
import {showVideoPage} from "../../store/action";
import {connect} from "react-redux";
import {getFilm, getIsLoading, getIsVideoPlayer} from "../../store/selectors";
import {postFavorite} from "../../store/api-actions";
import Header from "../header/header";
import AddMyListContainer from "../add-my-list/add-my-list-container";

const Film = ({film, films, isActive, handlerTabOpen, isVideoPlayer, showVideoPageAction, isLoading, filmId, postFilmFavorite}) => {
  const {backgroundImage, name, genre, released, posterImage, id, isFavorite} = film;
  const likeGenreFilms = films.filter((itemFilm) => itemFilm.genre === genre && itemFilm.id !== id).slice(0, 3);

  if (isLoading) {
    return <p>Loading....</p>;
  } else {
    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt="The Grand Budapest Hotel"/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header/>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={() => showVideoPageAction(!isVideoPlayer)}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>
                  <AddMyListContainer isFavorite={isFavorite} filmId={Number(filmId)} postFilmFavorite={postFilmFavorite}/>
                  <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <Tabs handlerTabOpen={handlerTabOpen} isActive={isActive} filmId={Number(filmId)}/>
                </nav>
                {isActive === 0 && <Overview film={film}/>}
                {isActive === 1 && <Details film={film}/>}
                {isActive === 2 && <Reviews filmId={filmId}/>}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList films={likeGenreFilms}/>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
        {isVideoPlayer ? <MainVideoPlayer film={film}/> : ``}
      </>
    );
  }


};


const mapStateToProps = (state) => ({
  isVideoPlayer: getIsVideoPlayer(state),
  film: getFilm(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  showVideoPageAction(value) {
    dispatch(showVideoPage(value));
  },
  postFilmFavorite(filmId, status) {
    dispatch(postFavorite(filmId, status));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(withActiveTab(Film));

Film.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired),
  films: PropTypes.arrayOf(PropTypes.object.isRequired),
  isActive: PropTypes.number.isRequired,
  handlerTabOpen: PropTypes.func.isRequired,
  isVideoPlayer: PropTypes.bool.isRequired,
  showVideoPageAction: PropTypes.func.isRequired,
};
