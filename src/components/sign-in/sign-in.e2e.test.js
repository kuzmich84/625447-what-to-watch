import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";

configure({adapter: new Adapter()});

it(`Should click on tabs correctly`, () => {
  const onSubmit = jest.fn();

  const wrapper = shallow(
      <SignIn
        onSubmit={onSubmit}
      />
  );

  const form = wrapper.find(`form`);
  form.simulate(`submit`, {
    preventDefault: () => {}
  });
  expect(onSubmit).toHaveBeenCalledTimes(1);
});

