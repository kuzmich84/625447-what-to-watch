import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";
import mockReviews from "../../mocks/reviews";

const {comment, date, user, rating} = mockReviews[0];


test(`Should Review component render correctly`, () => {
  const tree = renderer
    .create(<Review
      comment={comment}
      userName={user.name}
      date={date}
      rating={rating}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
