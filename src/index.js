import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer.js";
import App from "./components/app/app";
import thunk from "redux-thunk";
import {createAPI} from "./sevices/api";
import {requireAuthorization} from "./store/action";
import {AuthorisationStatus} from "./const";
import {checkAuth, fetchFavorite, fetchFilmList, fetchLogin, fetchPromoFilm} from "./store/api-actions";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";

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
  store.dispatch(fetchPromoFilm()),
  store.dispatch(checkAuth()),
  store.dispatch(fetchLogin()),
  store.dispatch(fetchFavorite()),

]
).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById(`root`));
});


