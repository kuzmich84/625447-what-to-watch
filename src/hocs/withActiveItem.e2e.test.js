import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./withActiveItem";

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should HOC`, () => {
  const wrapper = shallow(
      <MockComponentWrapped films={} />
  );

  expect(wrapper.state().isPlaying).toEqual(false);
  expect(wrapper.state().film).toEqual({});
  expect(wrapper.state().activePlayer).toEqual(-1);

});

