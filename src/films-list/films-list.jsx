import React from "react";
import SmallMovieCard from "../components/small-movie-card/small-movie-card";
import PropTypes from "prop-types";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      film: {}
    };
    this._handlerMouseOverCard = this._handlerMouseOverCard.bind(this);
  }

  _handlerMouseOverCard(film) {
    this.setState(() => ({
      film
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
        />))}

      </div>
    );
  }
}

export default FilmsList;

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

