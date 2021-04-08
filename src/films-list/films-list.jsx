import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../components/videoplayer/videoplayer";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      isPlaying: false,
      activePlayer: -1,
    };
    this._handlerMouseOverCard = this._handlerMouseOverCard.bind(this);
    this._handlerMouseOutCard = this._handlerMouseOutCard.bind(this);
  }

  _handlerMouseOverCard(film) {
    this.setState(() => ({
      film,
      isPlaying: true,
      activePlayer: film.id - 1
    }));
  }

  _handlerMouseOutCard() {
    this.setState(() => ({
      film: {},
      isPlaying: false,
      activePlayer: -1
    }));
  }


  render() {
    const films = this.props.films;
    const {activePlayer} = this.state;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <VideoPlayer
            key={film.id}
            film={film}
            handlerMouseOverCard={this._handlerMouseOverCard}
            handlerMouseOutCard={this._handlerMouseOutCard}
            isPlaying={i === activePlayer}
          />


        ))}

      </div>
    );
  }
}

export default FilmsList;

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

