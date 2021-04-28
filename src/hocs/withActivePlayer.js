import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false,
        currentTime: 0,
        durationFilm: 0,
        buffered: [0, 0],
        isLoading: true,
      };

      this.videoRef = createRef();

      this._handleButtonClick = this._handleButtonClick.bind(this);
      this._handleCurrentTimeChange = this._handleCurrentTimeChange.bind(this);
      this._handleFilmDuration = this._handleFilmDuration.bind(this);
      this._handleFilmBuffer = this._handleFilmBuffer.bind(this);
      this._handlePlayClick = this._handlePlayClick.bind(this);
      this._getCurrentTimeFilm = this._getCurrentTimeFilm.bind(this);
      this._getFilmDuration = this._getFilmDuration.bind(this);
      this._handlePauseClick = this._handlePauseClick.bind(this);
      this._openFullScreen = this._openFullScreen.bind(this);
      this._getCurrentTime = this._getCurrentTime.bind(this);
      this._getBufferFilm = this._getBufferFilm.bind(this);

    }

    componentDidMount() {
      const {film} = this.props;
      const video = this.videoRef.current;
      video.src = film.videoLink;
      video.poster = film.previewImage;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
    }

    componentWillUnmount() {
      const video = this.videoRef.current;
      video.oncanplaythrough = null;
      video.removeEventListener(`timeupdate`, this._getCurrentTime);
      video.removeEventListener(`progress`, this._getBufferFilm);
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

    _handlePlayClick() {
      const video = this.videoRef.current;
      video.play();
      this._handleButtonClick();
      this._getCurrentTimeFilm();
    }

    _handlePauseClick() {
      const video = this.videoRef.current;
      video.pause();
      this._handleButtonClick();
    }

    _getCurrentTime() {
      const video = this.videoRef.current;
      this._handleCurrentTimeChange(video.currentTime);
    }

    _getBufferFilm() {
      const video = this.videoRef.current;
      for (let i = 0; i < video.buffered.length; i++) {
        this._handleFilmBuffer(video.buffered.start(i) / video.duration, video.buffered.end(i) / video.duration);
      }
    }

    _getCurrentTimeFilm() {
      const video = this.videoRef.current;
      video.addEventListener(`timeupdate`, this._getCurrentTime, false);
      video.addEventListener(`progress`, this._getBufferFilm, false);
      this._getFilmDuration();
    }


    _getFilmDuration() {
      const video = this.videoRef.current;
      this._handleFilmDuration(video.duration);
    }


    _openFullScreen() {
      const video = this.videoRef.current;
      video.requestFullscreen();
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
        handlePauseClick={this._handlePauseClick}
        handlePlayClick={this._handlePlayClick}
        openFullScreen={this._openFullScreen}
      >
        <video className="player__video" ref={this.videoRef}/>
      </Component>;
    }
  }

  WithActivePlayer.propTypes = {
    film: PropTypes.object.isRequired,
  };
  return WithActivePlayer;


};

export default withActivePlayer;

