import React from "react";
import {connect} from "react-redux";
import {changeGenre} from "../../store/action";
import PropTypes from "prop-types";
import {getFilms, getGenre, setGenresReselect} from "../../store/selectors";


const GenreList = ({genre, changeGenreAction, genres}) => {

  function handlerGenreClick(e) {
    e.preventDefault();
    changeGenreAction(e.target.text);
  }
  return (
    <ul className="catalog__genres-list">

      {
        genres.map((item) => {
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
  genres: setGenresReselect(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeGenreAction(value) {
    dispatch(changeGenre(value));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

GenreList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genre: PropTypes.string.isRequired,
  changeGenreAction: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
