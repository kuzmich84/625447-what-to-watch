import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Tabs} from "./tabs";

configure({adapter: new Adapter()});

it(`Should click on tabs correctly`, () => {
  const handlerTabOpen = jest.fn();
  const loadReviewsServer = jest.fn();
  const wrapper = shallow(
      <Tabs
        isActive={1}
        handlerTabOpen={handlerTabOpen}
        filmId={5}
        loadReviewsServer={loadReviewsServer}
      />
  );

  wrapper.find(`a`).at(0).simulate(`click`, {preventDefault: () => {}});
  expect(handlerTabOpen).toHaveBeenCalledTimes(1);
  expect(loadReviewsServer).toHaveBeenCalledTimes(0);
  wrapper.find(`a`).at(2).simulate(`click`, {preventDefault: () => {}});
  expect(loadReviewsServer).toHaveBeenCalledTimes(1);
});

