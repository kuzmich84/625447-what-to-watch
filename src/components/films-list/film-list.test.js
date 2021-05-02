import React from "react";
import renderer from "react-test-renderer";
import {FilmsList} from "./films-list";
import mockFilmList from "../../mocks/films";

const noop = () => {};

test(`Should FilmList component render correctly`, () => {
  const tree = renderer
    .create(<FilmsList
      handlerMouseOutCard={noop}
      handlerMouseOverCard={noop}
      films={mockFilmList}
      activePlayer={1} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

