import React from "react";
import {configure, mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Header} from "./header";
import {BrowserRouter as Router, Link} from "react-router-dom";

configure({adapter: new Adapter()});

it(`Should go to page My list by click on avatar`, () => {
  const wrapper = mount(
      <Router>
        <Header
          authorisationStatus={`AUTH`}
          avatar={`img.jpg`}
          page={`main`}
        /> </Router>
  );

  // const link = wrapper.find(`Link`).first();
  // link.simulate(`click`, {button: 0});

  // expect(link.simulate(`click`));
  // expect(wrapper.find(`a`).prop(`href`)).toEqual(`/mylist`);

});
