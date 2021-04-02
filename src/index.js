import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import PropTypes from "prop-types";
import camelcaseKeys from "camelcase-keys";
import films from "./mocks/films";
import reviews from "./mocks/reviews";


const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
};

ReactDOM.render(
    <App
      promoFilm={promoFilm}
      films={camelcaseKeys(films)}
      reviews={camelcaseKeys(reviews)}
    />,
    document.getElementById(`root`));


App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};
