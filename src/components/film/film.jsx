import React from 'react';
import PropTypes from "prop-types";
import {useHistory, Link} from "react-router-dom";
import Tabs from "../tabs/tabs";
import Overview from "../tabs/overview/overview";
import Details from "../tabs/details/details";
import Reviews from "../tabs/reviews/reviews";
import FilmsList from "../films-list/films-list";
import withActiveTab from "../../hocs/withActiveTab";
import MainVideoPlayer from "../main-videoplayer/main-videoplayer";
import {showVideoPage} from "../../store/action";
import {connect} from "react-redux";
import {getAuthorisationStatus, getFilm, getIsLoading} from "../../store/selectors";
import {postFavorite} from "../../store/api-actions";
import Header from "../header/header";
import AddMyListContainer from "../add-my-list/add-my-list-container";
import {AuthorisationStatus} from "../../const";
import {ScrollToTop} from "../../myHooks/scrollToTop";
import Footer from "../footer/footer";

const Film = ({film, films, isActive, handlerTabOpen, isVideoPlayer, isLoading, filmId, postFilmFavorite, authorisationStatus}) => {
  const {backgroundImage, name, genre, released, posterImage, id, isFavorite} = film;
  const likeGenreFilms = films.filter((itemFilm) => itemFilm.genre === genre && itemFilm.id !== id).slice(0, 3);
  const history = useHistory();

  if (isLoading) {
    return <p>Loading....</p>;
  } else {
    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt="The Grand Budapest Hotel"/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header/>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={()=>history.push(`/player/${id}`)}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>
                  {authorisationStatus === AuthorisationStatus.AUTH && <AddMyListContainer isFavorite={isFavorite} filmId={Number(filmId)} postFilmFavorite={postFilmFavorite}/>}
                  {authorisationStatus === AuthorisationStatus.AUTH && <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>}
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <Tabs handlerTabOpen={handlerTabOpen} isActive={isActive} filmId={Number(filmId)}/>
                </nav>
                {isActive === 0 && <Overview film={film}/>}
                {isActive === 1 && <Details film={film}/>}
                {isActive === 2 && <Reviews filmId={filmId}/>}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList films={likeGenreFilms}/>
          </section>
          <Footer/>
        </div>
        {isVideoPlayer ? <MainVideoPlayer film={film}/> : ``}
        <ScrollToTop/>
      </>
    );
  }


};


const mapStateToProps = (state) => ({
  film: getFilm(state),
  isLoading: getIsLoading(state),
  authorisationStatus: getAuthorisationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  postFilmFavorite(filmId, status) {
    dispatch(postFavorite(filmId, status));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(withActiveTab(Film));

Film.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired),
  films: PropTypes.arrayOf(PropTypes.object.isRequired),
  isActive: PropTypes.number.isRequired,
  handlerTabOpen: PropTypes.func.isRequired,
  authorisationStatus: PropTypes.string.isRequired,
};
