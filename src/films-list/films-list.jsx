import React from "react";
import SmallMovieCard from "../components/small-movie-card/small-movie-card";
import PropTypes from "prop-types";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      isMouseOverCard: false,
    };
    this._handlerMouseOverCard = this._handlerMouseOverCard.bind(this);
    this._handlerMouseOutCard = this._handlerMouseOutCard.bind(this);
  }

  _handlerMouseOverCard(film) {
    this.setState(() => ({
      film,
      isMouseOverCard: true,
    }));
  }

  _handlerMouseOutCard() {
    this.setState(() => ({
      isMouseOverCard: false,
    }));
  }

  render() {
    const films = this.props.films;
    return (
      <div className="catalog__movies-list">
        {films.map((film) => (<SmallMovieCard
          key={film.id}
          film={film}
          handlerMouseOverCard={this._handlerMouseOverCard}
          handlerMouseOutCard={this._handlerMouseOutCard}
          isMouseOverCard = {this.state.isMouseOverCard}
        />))}

      </div>
    );
  }
}

export default FilmsList;

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

