import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from "../films-list/films-list";
import GenreList from "../genre-list/genre-list";
import {connect} from "react-redux";
import ShowMore from "../show-more/show-more";
import withActiveShowMore from "../../hocs/withActiveShowMore";
import {getFilmListOfGenreReselect, getFilms, getGenre} from "../../store/selectors";
import PromoFilm from "../promo-film/promo-film";
import Footer from "../footer/footer";

const Main = ({genre, films, filmsOfGenre, handlerClickButton, number}) => {

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
        <Footer/>
      </div>
    </>
  );

};


const mapStateToProps = (state) => ({
  filmsOfGenre: getFilmListOfGenreReselect(state),
  films: getFilms(state),
  genre: getGenre(state),
});


export {Main};
export default connect(mapStateToProps)(withActiveShowMore(Main));


Main.propTypes = {
  genre: PropTypes.string.isRequired,
  filmsOfGenre: PropTypes.arrayOf(PropTypes.object),
  films: PropTypes.arrayOf(PropTypes.object),
  handlerClickButton: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};
