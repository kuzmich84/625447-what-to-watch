import React from "react";
import renderer from "react-test-renderer";
import {Tabs} from "./tabs";

const noop = () => {
};

test(`Should Tabs component render correctly`, () => {
  const tree = renderer
    .create(<Tabs
      handlerTabOpen={noop}
      isActive={1}
      filmId={10}
      loadReviewsServer={noop}
    />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

