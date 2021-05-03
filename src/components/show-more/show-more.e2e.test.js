import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMore from "./show-more";

configure({adapter: new Adapter()});

it(`Should click on button ShowMore correctly`, () => {
  const handlerClickButton = jest.fn();

  const wrapper = shallow(
      <ShowMore
        handlerClickButton={handlerClickButton}
      />
  );

  wrapper.find(`button`).simulate(`click`, {preventDefault: () => {}});
  expect(handlerClickButton).toHaveBeenCalledTimes(1);
  wrapper.find(`button`).simulate(`click`, {preventDefault: () => {}});
  expect(handlerClickButton).toHaveBeenCalledTimes(2);
});

