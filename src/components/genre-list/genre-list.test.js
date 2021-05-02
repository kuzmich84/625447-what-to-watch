import React from "react";
import renderer from "react-test-renderer";
import {GenreList} from "./genre-list";
import mockFilmList from "../../mocks/films";

const noop = () => {
};

const genres = [`All genres`, `Comedy`, `Drama`, `Crime`];

test(`Should GenreList component render correctly`, () => {
  const tree = renderer
    .create(<GenreList
      changeGenreAction={noop}
      films={mockFilmList}
      genre={`Comedy`}
      genres={genres}
    />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

