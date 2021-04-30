import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import Film from "../film/film";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import AddReview from "../add-review/add-review";
import {connect} from "react-redux";
import {getFilms, getIsVideoPlayer} from "../../store/selectors";
import PrivateRoute from "../private-root/private-root";
import browserHistory from "../../browser-history";


const App = ({films}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <Main />
          );
        }}
        />
        <Route exact path="/login" component={SignIn}/>
        <PrivateRoute
          exact
          path="/mylist"
          render={() => {
            return <MyList/>;
          }}
        />
        <Route exact path="/films/:id" render={({match}) => {
          const {id} = match.params;
          return (
            <Film films={films} filmId={id}/>
          );
        }}/>
        <Route exact path="/player/:id" render={() => {
          return (
            <Player/>
          );
        }}/>
        <PrivateRoute
          exact
          path="/films/:id/review"
          render={({match}) => {
            const {id} = match.params;
            return (
              <AddReview filmId={id} film={films[id - 1]}/>
            );
          }}
        />
        <Route>
          <h1>No Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>

  );
};


const mapStateToProps = (state) => ({
  films: getFilms(state),
  isVideoPlayer: getIsVideoPlayer(state),
});

export {App};
export default connect(mapStateToProps)(App);

App.propTypes = {
  films: PropTypes.array.isRequired,
};
