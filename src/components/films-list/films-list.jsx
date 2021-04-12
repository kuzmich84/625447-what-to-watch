import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../videoplayer/videoplayer";
import withActiveItem from "../../hocs/withActiveItem";
import {connect} from "react-redux";

const FilmsList = ({films, filmsOfGenre, handlerMouseOverCard, handlerMouseOutCard, activePlayer}) => {
  const currentFilms = filmsOfGenre.length ? filmsOfGenre : films;
  return (
    <div className="catalog__movies-list">
      {currentFilms.map((film, i) => (
        <VideoPlayer
          key={film.id}
          film={film}
          handlerMouseOverCard={handlerMouseOverCard}
          handlerMouseOutCard={handlerMouseOutCard}
          isPlaying={i === activePlayer}
          i={i}
        />
      ))}

    </div>
  );
};


const mapStateToProps = (state) => ({
  filmsOfGenre: state.filmsOfGenre,
  films: state.films,
});


export {FilmsList};
export default connect(mapStateToProps)(withActiveItem(FilmsList));

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  filmsOfGenre: PropTypes.array.isRequired,
  handlerMouseOverCard: PropTypes.func.isRequired,
  handlerMouseOutCard: PropTypes.func.isRequired,
  activePlayer: PropTypes.number.isRequired,
};

