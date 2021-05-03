import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more";

const noop = () => {
};

test(`Should ShowMore component render correctly`, () => {
  const tree = renderer
    .create(<ShowMore
      handlerClickButton={noop}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

