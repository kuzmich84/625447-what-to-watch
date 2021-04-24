import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from "../films-list/films-list";
import GenreList from "../genre-list/genre-list";
import {connect} from "react-redux";
import ShowMore from "../show-more/show-more";
import withActiveShowMore from "../../hocs/withActiveShowMore";
import MainVideoPlayer from "../main-videoplayer/main-videoplayer";
import {getFilmListOfGenreReselect, getFilms, getGenre, getIsVideoPlayer} from "../../store/selectors";
import PromoFilm from "../promo-film/promo-film";

const Main = ({genre, films, filmsOfGenre, handlerClickButton, number, isVideoPlayer}) => {

  function getFilmsPart(array, value) {
    return array.slice(0, value);
  }

  return (
    <>
      <PromoFilm/>
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
  filmsOfGenre: getFilmListOfGenreReselect(state),
  films: getFilms(state),
  genre: getGenre(state),
  isVideoPlayer: getIsVideoPlayer(state),
});


export {Main};
export default connect(mapStateToProps)(withActiveShowMore(Main));


Main.propTypes = {
  genre: PropTypes.string.isRequired,
  filmsOfGenre: PropTypes.arrayOf(PropTypes.object),
  films: PropTypes.arrayOf(PropTypes.object),
  handlerClickButton: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  isVideoPlayer: PropTypes.bool.isRequired,
};
