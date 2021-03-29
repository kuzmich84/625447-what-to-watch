import React from 'react';
import Main from './main';
import PropTypes from 'prop-types';

const App = ({promoFilm}) => {

  return (
    <Main title={promoFilm.title} genre={promoFilm.genre} date={promoFilm.date} />
  );
};

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number,
  })
};


export default App;
