import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from "../films-list/films-list";
import GenreList from "../genre-list/genre-list";
import {connect} from "react-redux";
import ShowMore from "../show-more/show-more";
import withActiveShowMore from "../../hocs/withActiveShowMore";
import {ActionCreator} from "../../store/action";
import MainVideoPlayer from "../main-videoplayer/main-videoplayer";

const Main = ({title, genre, genrePromo, date, films, filmsOfGenre, handlerClickButton, number, showVideoPageAction, isVideoPlayer}) => {

  function getFilmsPart(array, value) {
    return array.slice(0, value);
  }

  function handlerShowVideoPage() {
    showVideoPageAction(true);
  }

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster"
                width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genrePromo}</span>
                <span className="movie-card__year">{date}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={handlerShowVideoPage}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList/>


          <FilmsList films={filmsOfGenre.length ? getFilmsPart(filmsOfGenre, number) : getFilmsPart(films, number)}/>
          <div className="catalog__more">
            {films.length >= number && genre === `All genres` ? <ShowMore handlerClickButton={handlerClickButton}/> : ``}
            {filmsOfGenre.length >= number ? <ShowMore handlerClickButton={handlerClickButton}/> : ``}

          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
      {isVideoPlayer ? <MainVideoPlayer film={films[0]}/> : ``}
    </>
  );

};


const mapStateToProps = (state) => ({
  filmsOfGenre: state.filmsOfGenre,
  films: state.films,
  genre: state.genre,
  isVideoPlayer: state.isVideoPlayer,
});

const mapDispatchToProps = (dispatch) => ({
  showVideoPageAction(value) {
    dispatch(ActionCreator.showVideoPage(value));
  }
});


export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveShowMore(Main));


Main.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  genrePromo: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  filmsOfGenre: PropTypes.arrayOf(PropTypes.object),
  films: PropTypes.arrayOf(PropTypes.object),
  handlerClickButton: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  showVideoPageAction: PropTypes.func.isRequired,
  isVideoPlayer: PropTypes.bool.isRequired,
};
