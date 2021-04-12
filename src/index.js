import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import App from "./components/app/app";
import camelcaseKeys from "camelcase-keys";
import reviews from "./mocks/reviews";


const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
};


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f //  Подключает поддержку redux devtools
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm={promoFilm}
        reviews={camelcaseKeys(reviews)}
      />
    </Provider>,
    document.getElementById(`root`));
