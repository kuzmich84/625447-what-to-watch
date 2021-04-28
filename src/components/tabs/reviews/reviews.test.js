import React from "react";
import renderer from "react-test-renderer";
import {Reviews} from "./reviews";
import mockReviews from "../../../mocks/reviews";


test(`Should Reviews component render correctly`, () => {
  const tree = renderer
    .create(<Reviews
      reviews={mockReviews}
      isLoadingReviews={false}
    />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
