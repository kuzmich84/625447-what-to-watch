import React from 'react';
import Main from './main';
import PropTypes from 'prop-types';

const App = ({promoFilm}) => {

  return (
    <Main title={promoFilm.title} genre={promoFilm.genre} date={promoFilm.date} />
  );
};

App.propTypes = {
  promoFilm: PropTypes.object.isRequired
};


export default App;
