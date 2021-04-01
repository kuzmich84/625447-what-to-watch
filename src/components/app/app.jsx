import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Film from "../film/film";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import AddReview from "../add-review/add-review";

const App = ({promoFilm}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={SignIn}/>
        <Route exact path="/mylist" component={MyList}/>
        <Route exact path="/" render={() => {
          return (
            <Main title={promoFilm.title} genre={promoFilm.genre} date={promoFilm.date}/>
          );
        }}
        />
        <Route exact path="/films/:id" render={() => {
          return (
            <Film/>
          );
        }}/>
        <Route exact path="/player/:id" render={() => {
          return (
            <Player/>
          );
        }}/>
        <Route exact path="/films/:id/review" render={() => {
          return (
            <AddReview/>
          );
        }}/>

        <Route>
          <h1>No Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number,
  })
};


export default App;
