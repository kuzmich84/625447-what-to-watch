import React, {useState} from "react";
import {extend} from "../utils";


const withActiveItem = (Component) => {
  const WithActiveItem = (props) => {

    const initialState = {
      film: {},
      isPlaying: false,
      activePlayer: -1,
    };

    const [state, setState] = useState(initialState);

    const {activePlayer} = state;

    const handlerMouseOverCard = (film, i) => {
      setState(extend(state, {
        film,
        isPlaying: true,
        activePlayer: i
      }));
    };

    const handlerMouseOutCard = () => {
      setState(extend(state, initialState));
    };

    return (
      <Component
        {...props}
        activePlayer={activePlayer}
        handlerMouseOverCard={handlerMouseOverCard}
        handlerMouseOutCard={handlerMouseOutCard}
      />
    );


  };
  return WithActiveItem;
};

export default withActiveItem;
