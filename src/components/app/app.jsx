import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Film from "../film/film";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import AddReview from "../add-review/add-review";
import {connect} from "react-redux";

const App = ({promoFilm, films, reviews}) => {

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
        <Route exact path="/films/:id" render={({match}) => {
          const {id} = match.params;
          return (
            <Film film={films[id - 1]} reviews={reviews} films={films}/>
          );
        }}/>
        <Route exact path="/player/:id" render={() => {
          return (
            <Player/>
          );
        }}/>
        <Route exact path="/films/:id/review" render={({match}) => {
          const {id} = match.params;
          return (
            <AddReview film={films[id - 1]}/>
          );
        }}/>

        <Route>
          <h1>No Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>

  );
};


const mapStateToProps = (state) => ({
  films: state.films,
});

export {App};
export default connect(mapStateToProps)(App);

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number,
  }),
  films: PropTypes.array.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }),
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }))
};
