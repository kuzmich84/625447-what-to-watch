import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {BrowserRouter as Router} from 'react-router-dom';

test(`Should Header render correctly`, () => {
  const tree = renderer
    .create(<Router>
      <Header
        authorisationStatus={`AUTH`}
        avatar={`img.jpg`}
        page={`main`}
      /> </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
