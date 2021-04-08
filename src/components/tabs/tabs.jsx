import React from "react";
import {tabsTitle} from "../../const";
import PropTypes from "prop-types";

const Tabs = (props) => {
  const {isActive, handlerTabOpen} = props;
  return (
    <ul className="movie-nav__list">
      {tabsTitle.map((tab, i) => {
        return (
          <li
            key={i}
            className={`movie-nav__item  ${i === isActive ? `movie-nav__item--active` : ``}`}
          >
            <a href="#" className="movie-nav__link" onClick={(e) => {
              e.preventDefault();
              handlerTabOpen(i);
            }}>{tab}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;

Tabs.propTypes = {
  isActive: PropTypes.number.isRequired,
  handlerTabOpen: PropTypes.func.isRequired,
};
