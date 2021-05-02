import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../videoplayer/videoplayer";
import withActiveItem from "../../hocs/withActiveItem";


const FilmsList = ({films, handlerMouseOverCard, handlerMouseOutCard, activePlayer}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
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

export {FilmsList};
export default withActiveItem(FilmsList);

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  handlerMouseOverCard: PropTypes.func.isRequired,
  handlerMouseOutCard: PropTypes.func.isRequired,
  activePlayer: PropTypes.number.isRequired,
};

