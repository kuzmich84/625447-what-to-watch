import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PromoFilm} from "./promo-film";
import mockFilmList from "../../mocks/films";
import {AuthorisationStatus} from "../../const";

configure({adapter: new Adapter()});

test(`Click on "Play video"`, () => {
  const onPlayVideoClick = jest.fn();

  const wrapper = shallow(
      <PromoFilm
        showVideoPageAction={onPlayVideoClick}
        postFilmFavorite={()=>{}}
        promo={mockFilmList[1]}
        authorizationStatus={AuthorisationStatus.AUTH}
      />
  );

  wrapper.find(`.btn--play`).simulate(`click`);
  expect(onPlayVideoClick).toHaveBeenCalledTimes(1);


});
