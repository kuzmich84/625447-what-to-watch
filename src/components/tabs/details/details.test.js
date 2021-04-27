import React from "react";
import renderer from "react-test-renderer";
import Details from "./details";
import mockFilmList from "../../../mocks/films";


test(`Should Details component render correctly`, () => {
  const tree = renderer
    .create(<Details
      film={mockFilmList[1]}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
