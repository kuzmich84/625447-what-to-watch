import {useState, useEffect} from "react";
import {extend} from "../utils";

const withAddReviewHook = ({isSendReview, error}) => {
  const [stateReview, setReviewState] = useState({
    rating: 5,
    review: ``,
    isDisabled: true,
  });

  const {rating, review, isDisabled} = stateReview;

  useEffect(() => {
    setReviewState(extend(stateReview, {
      rating: 5,
      review: ``,
    }));

  }, [isSendReview]);
};

