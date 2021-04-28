import React from "react";
import {tabsTitle} from "../../const";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilmReviews} from "../../store/api-actions";


const Tabs = (props) => {
  const {isActive, handlerTabOpen, filmId, loadReviewsServer} = props;
  return (
    <ul className="movie-nav__list">
      {tabsTitle.map((tab, i) => {
        return (
          <li
            key={i}
            className={`movie-nav__item  ${i === isActive ? `movie-nav__item--active` : ``} clicks-${i}`}
          >
            <a href="#" className="movie-nav__link" onClick={(e) => {
              e.preventDefault();
              handlerTabOpen(i);
              if (i === 2) {
                loadReviewsServer(filmId);
              }
            }}>{tab}</a>
          </li>
        );
      })}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadReviewsServer(filmId) {
    dispatch(fetchFilmReviews(filmId));
  }
});


export {Tabs};
export default connect(null, mapDispatchToProps)(Tabs);

Tabs.propTypes = {
  isActive: PropTypes.number.isRequired,
  handlerTabOpen: PropTypes.func.isRequired,
  filmId: PropTypes.number.isRequired,
  loadReviewsServer: PropTypes.func.isRequired,
};
