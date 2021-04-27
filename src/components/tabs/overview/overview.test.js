import React from "react";
import renderer from "react-test-renderer";
import Overview from "./overview";
import mockFilmList from "../../../mocks/films";


test(`Should Overview component render correctly`, () => {
  const tree = renderer
    .create(<Overview film={mockFilmList[3]}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
