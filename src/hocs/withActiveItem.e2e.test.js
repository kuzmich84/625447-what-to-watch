import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./withActiveItem";
import mockFilmList from "../mocks/films";

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should HOC`, () => {
  const handlerMouseOverCard = jest.fn();
  const handlerMouseOutCard = jest.fn();

  const wrapper = shallow(
      <MockComponentWrapped
        activePlayer={-1}
        film={mockFilmList[0]}
        isPlaying={false}
        handlerMouseOverCard={handlerMouseOverCard}
        handlerMouseOutCard={handlerMouseOutCard}/>
  );

  expect(wrapper.props().activePlayer).toEqual(-1);
  wrapper.props().handlerMouseOverCard(mockFilmList[0], 1);
  expect(wrapper.props().film).toEqual(mockFilmList[0]);
  expect(wrapper.props().activePlayer).toEqual(1);
  wrapper.props().handlerMouseOutCard();
  expect(wrapper.props().activePlayer).toEqual(-1);
  wrapper.props().handlerMouseOutCard();
  expect(wrapper.props().isPlaying).toEqual(false);
});

