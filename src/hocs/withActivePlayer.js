import React, {PureComponent} from "react";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false,
        currentTime: 0,
        durationFilm: 0,
        buffered: [0, 0],
      };

      this._handleButtonClick = this._handleButtonClick.bind(this);
      this._handleCurrentTimeChange = this._handleCurrentTimeChange.bind(this);
      this._handleFilmDuration = this._handleFilmDuration.bind(this);
      this._handleFilmBuffer = this._handleFilmBuffer.bind(this);

    }

    _handleButtonClick() {
      this.setState((state) => ({
        isPlaying: !state.isPlaying,
      }));
    }

    _handleCurrentTimeChange(currentTime) {
      this.setState(() => ({
        currentTime,
      }));
    }

    _handleFilmDuration(durationFilm) {
      this.setState(() => ({
        durationFilm,
      }));
    }

    _handleFilmBuffer(startX, endX) {
      this.setState(() => ({
        buffered: [startX, endX]
      }));
    }

    render() {
      return <Component
        {...this.props}
        handleButtonClick={this._handleButtonClick}
        handleCurrentTimeChange={this._handleCurrentTimeChange}
        handleFilmDuration={this._handleFilmDuration}
        handleFilmBuffer={this._handleFilmBuffer}
        isPlaying={this.state.isPlaying}
        currentTimeFilm={this.state.currentTime}
        durationFilm={this.state.durationFilm}
        buffered={this.state.buffered}
      />;
    }
  }

  return WithActivePlayer;

};

export default withActivePlayer;
