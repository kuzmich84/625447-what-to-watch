import React from "react";
import renderer from "react-test-renderer";
import {VideoPlayer} from "./videoplayer";
import mockFilList from "../../mocks/films";
import {BrowserRouter as Router} from 'react-router-dom';

const noop = () => {};

test(`Should VideoPlayer component render correctly`, () => {
  const tree = renderer
    .create(<Router><VideoPlayer
      handlerMouseOverCard={noop}
      film={mockFilList[2]}
      handlerMouseOutCard={noop}
    /></Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

