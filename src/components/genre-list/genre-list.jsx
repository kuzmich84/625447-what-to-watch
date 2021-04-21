import React from "react";
import {connect} from "react-redux";
import {changeGenre, getFilmListOfGenre} from "../../store/action";
import PropTypes from "prop-types";
import {getFilms, getGenre} from "../../store/selectors";


const GenreList = ({films, genre, changeGenreAction, getFilmListOfGenreAction}) => {

  function getGenreList(movies) {
    let allGenres = [`All genres`];
    const setGenreList = new Set(movies.map((movie) => movie.genre));
    setGenreList.forEach((item) => {
      allGenres.push(item);
    });
    return allGenres;
  }

  function handlerGenreClick(e) {
    e.preventDefault();
    changeGenreAction(e.target.text);
  }

  function changeFilmListOfGenre(array, value) {
    return array.filter((item)=>item.genre === value);
  }

  getFilmListOfGenreAction(changeFilmListOfGenre(films, genre));


  return (
    <ul className="catalog__genres-list">

      {
        getGenreList(films).map((item) => {
          return (
            <li key={item} className={`catalog__genres-item ${item === genre ? `catalog__genres-item--active` : ``}`}>
              <a href={item} className="catalog__genres-link" onClick={handlerGenreClick}>{item}</a>
            </li>
          );
        })
      }

    </ul>
  );
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  genre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeGenreAction(value) {
    dispatch(changeGenre(value));
  },
  getFilmListOfGenreAction(value) {
    dispatch(getFilmListOfGenre(value));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

GenreList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genre: PropTypes.string.isRequired,
  changeGenreAction: PropTypes.func.isRequired,
  getFilmListOfGenreAction: PropTypes.func.isRequired
};
