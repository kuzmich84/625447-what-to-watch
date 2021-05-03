import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import {BrowserRouter as Router} from 'react-router-dom';

test(`Should Sign In component render correctly`, () => {
  const tree = renderer
    .create(<Router><SignIn
      onSubmit={() => {}}>
    </SignIn>
    </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

