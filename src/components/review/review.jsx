import React from "react";
import {setDateToString} from "../utils";
import PropTypes from "prop-types";

const Review = (props) => {
  const {comment, userName, date, rating} = props;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={date}>{setDateToString(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>

  );
};

export default Review;

Review.propTypes = {
  comment: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
