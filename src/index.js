import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer.js";
import App from "./components/app/app";
import camelcaseKeys from "camelcase-keys";
import thunk from "redux-thunk";
import {createAPI} from "./sevices/api";
import {requireAuthorization} from "./store/action";
import {AuthorisationStatus} from "./const";
import {checkAuth, fetchFilmList, fetchPromoFilm} from "./store/api-actions";
import reviews from "./mocks/reviews";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";


const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genrePromo: `Drama`,
  date: 2014,
};

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorisationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchFilmList()),
  store.dispatch(checkAuth()),
  store.dispatch(fetchPromoFilm()),
]
).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          promoFilm={promoFilm}
          reviews={camelcaseKeys(reviews)}
        />
      </Provider>,
      document.getElementById(`root`));
});


