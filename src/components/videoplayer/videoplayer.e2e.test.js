import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {VideoPlayer} from "./videoplayer";
import mockFilmList from "../../mocks/films";

configure({adapter: new Adapter()});
const noop = () => {};

it(`Should load film on Click title film`, () => {
  const loadFilmServer = jest.fn();
  const wrapper = shallow(
      <VideoPlayer
        handlerMouseOverCard={noop}
        handlerMouseOutCard={noop}
        film={mockFilmList[1]}
        loadFilmServer={loadFilmServer}
      />
  );

  wrapper.find(`h3`).simulate(`click`);
  expect(loadFilmServer).toHaveBeenCalledTimes(1);
});

