import React from "react";
import Review from "../../review/review";
import PropTypes from "prop-types";

const Reviews = ({reviews}) => {
  const sortReviews = reviews.sort((a, b) => b.rating - a.rating);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {sortReviews.filter((review) => review.id % 2 !== 0).map((review) => <Review
          key={review.id}
          comment={review.comment}
          date={review.date}
          rating={review.rating}
          userName={review.user.name}
        />)}
      </div>
      <div className="movie-card__reviews-col">
        {sortReviews.filter((review) => review.id % 2 === 0).map((review) => <Review
          key={review.id}
          comment={review.comment}
          date={review.date}
          rating={review.rating}
          userName={review.user.name}
        />)}
      </div>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.object.isRequired
};
