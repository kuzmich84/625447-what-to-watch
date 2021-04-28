import React from "react";
import Review from "../../review/review";
import PropTypes from "prop-types";
import {getIsLoadingReviews, getReviews} from "../../../store/selectors";
import {connect} from "react-redux";

const Reviews = ({reviews, isLoadingReviews}) => {
  const sortReviews = reviews.sort((a, b) => b.rating - a.rating);

  if (isLoadingReviews) {
    return <p>Loading</p>;
  } else {
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
  }
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  isLoadingReviews: getIsLoadingReviews(state),
});

export {Reviews};
export default connect(mapStateToProps)(Reviews);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired)
};
