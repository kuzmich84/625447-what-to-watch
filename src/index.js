import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
};

ReactDOM.render(
    <App promoFilm={promoFilm}/>,
    document.getElementById(`root`));
