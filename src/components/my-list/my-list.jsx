import React from 'react';
import {connect} from "react-redux";
import {getFilmListOfFavorite} from "../../store/selectors";
import VideoPlayer from "../videoplayer/videoplayer";
import withActiveItem from "../../hocs/withActiveItem";
import PropTypes from "prop-types";
import Header from "../header/header";

const MyList = ({filmsOfFavorite, handlerMouseOverCard, handlerMouseOutCard, activePlayer}) => {
  return (
    <div className="user-page">
      <Header><h1 className="page-title user-page__title">My list</h1></Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {filmsOfFavorite.map((film, i) => (
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
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filmsOfFavorite: getFilmListOfFavorite(state)
});

export {MyList};
export default connect(mapStateToProps)(withActiveItem(MyList));

MyList.propTypes = {
  filmsOfFavorite: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handlerMouseOverCard: PropTypes.func.isRequired,
  handlerMouseOutCard: PropTypes.func.isRequired,
  activePlayer: PropTypes.number.isRequired,
};
