import React from "react";
import renderer from "react-test-renderer";
import {PromoFilm} from "./promo-film";
import mockFilmList from "../../mocks/films";
import {Header} from "../header/header";
import {AuthorisationStatus} from "../../const";

const noop = () => {
};

test(`Should PromoFilm component render correctly`, () => {
  const tree = renderer
    .create(
        <PromoFilm
          showVideoPageAction={noop}
          postFilmFavorite={noop}
          promo={mockFilmList[3]}
        >
          <React.Fragment/>
        </PromoFilm>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
