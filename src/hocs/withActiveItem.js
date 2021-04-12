import React, {PureComponent} from "react";


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        film: {},
        isPlaying: false,
        activePlayer: -1,
      };
      this._handlerMouseOverCard = this._handlerMouseOverCard.bind(this);
      this._handlerMouseOutCard = this._handlerMouseOutCard.bind(this);
    }

    _handlerMouseOverCard(film, i) {
      this.setState(() => ({
        film,
        isPlaying: true,
        activePlayer: i
      }));
    }

    _handlerMouseOutCard() {
      this.setState(() => ({
        film: {},
        isPlaying: false,
        activePlayer: -1
      }));
    }

    render() {
      const {activePlayer} = this.state;

      return (
        <Component
          {...this.props}
          activePlayer={activePlayer}
          handlerMouseOverCard={this._handlerMouseOverCard}
          handlerMouseOutCard={this._handlerMouseOutCard}
        />
      );
    }

  }

  return WithActiveItem;
};

export default withActiveItem;
