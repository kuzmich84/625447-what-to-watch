import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Tabs from "../tabs/tabs";
import Overview from "../tabs/overview/overview";
import Details from "../tabs/details/details";
import Reviews from "../tabs/reviews/reviews";
import FilmsList from "../films-list/films-list";

export default class Film extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 0,
    };

    this._handlerTabOpen = this._handlerTabOpen.bind(this);
  }

  _handlerTabOpen(i) {
    this.setState(() => ({
      isActive: +i
    }));
  }

  render() {
    const {backgroundImage, name, genre, released, posterImage, id} = this.props.film;
    const likeGenreFilms = this.props.films.filter((film) => film.genre === genre && film.id !== id).slice(0, 3);

    const link = `/films/${id}/review`;
    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt="The Grand Budapest Hotel"/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"/>
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to={link} className="btn movie-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218"
                  height="327"/>
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <Tabs handlerTabOpen={this._handlerTabOpen} isActive={this.state.isActive}/>
                </nav>
                {this.state.isActive === 0 && <Overview film={this.props.film}/>}
                {this.state.isActive === 1 && <Details film={this.props.film}/>}
                {this.state.isActive === 2 && <Reviews reviews={this.props.reviews}/>}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList films={likeGenreFilms}/>
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
      </>
    );
  }
}

Film.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired),
  films: PropTypes.arrayOf(PropTypes.object.isRequired),

};
