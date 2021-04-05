import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const SmallMovieCard = ({film, handlerMouseOverCard}) => {
  const {id, name, previewImage} = film;
  const link = `/films/${id}`;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => handlerMouseOverCard(film)}
    >
      <div className="small-movie-card__image">
        <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald"
          width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={link}>{name}</Link>
      </h3>
    </article>
  );
};

export default SmallMovieCard;

SmallMovieCard.propTypes = {
  handlerMouseOverCard: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
};
