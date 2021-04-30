import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {extend} from "../utils";

const withAddReview = (Component) => {
  const withAddReviewOnHook = (props) => {
    const {isSendReview, error, onSubmitComment, filmId, onSetIsSendReview} = props;
    const [stateReview, setReviewState] = useState({
      rating: 5,
      review: ``,
      isDisabled: true,
    });

    const {rating, review, isDisabled} = stateReview;

    useEffect(() => {
      if (error === null) {
        setReviewState(extend(stateReview, {
          rating: 5,
          review: ``,
        }));
      }

    }, [isSendReview]);

    useEffect(() => {
      validation();
    }, [review, rating]);

    const handleChangeReview = (evt) => {
      setReviewState(extend(stateReview,
          {review: evt.target.value}));
    };

    const handleChangeRating = (evt) => {
      setReviewState(extend(stateReview, {rating: +evt.target.value}));
    };

    const validation = () => {
      if (review.length >= 50 && review.length < 400) {
        setReviewState(extend(stateReview, {isDisabled: false}));
      } else {
        setReviewState(extend(stateReview, {isDisabled: true}));
      }
    };

    const handleSubmitComment = (e) => {
      e.preventDefault();
      onSetIsSendReview(true);
      onSubmitComment(filmId, {
        comment: review,
        rating,
      });
    };

    return (
      <Component
        {...props}
        handleSubmitComment={handleSubmitComment}
        handleChangeRating={handleChangeRating}
        handleChangeReview={handleChangeReview}
        review={review}
        isDisabled={isDisabled}
      />
    );


  };


  withAddReviewOnHook.propTypes = {
    onSubmitComment: PropTypes.func.isRequired,
    onSetIsSendReview: PropTypes.func.isRequired,
    filmId: PropTypes.string.isRequired,
    isSendReview: PropTypes.bool.isRequired,
    error: PropTypes.number,
  };

  return withAddReviewOnHook;

};

export default withAddReview;
