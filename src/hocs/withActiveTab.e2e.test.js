import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./withActiveTab";

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveTab(MockComponent);

it(`Should HOC withActiveTab`, () => {
  const handlerTabOpen = jest.fn();

  const wrapper = shallow(
      <MockComponentWrapped
        handlerTabOpen={handlerTabOpen}
        isActive={0}/>
  );

  expect(wrapper.props().isActive).toEqual(0);
  wrapper.props().handlerTabOpen(1);
  expect(wrapper.props().isActive).toEqual(1);
  wrapper.props().handlerTabOpen(`1`);
  expect(wrapper.props().isActive).toEqual(1);
  wrapper.props().handlerTabOpen(2);
  expect(wrapper.props().isActive).not.toEqual(1);

});

