import React, {createRef} from "react";
import {connect} from "react-redux";
import {showVideoPage} from "../../store/action";
import PropTypes from "prop-types";
import withActivePlayer from "../../hocs/withActivePlayer";
import {secToTime} from "../../utils";
import {getIsVideoPlayer} from "../../store/selectors";


const MainVideoPlayer = ({
  showVideoPageAction, film, isVideoPlayer, handleButtonClick, isPlaying,
  handleCurrentTimeChange, currentTimeFilm, durationFilm, handleFilmDuration, handleFilmBuffer, buffered

}) => {
  const {videoLink, previewImage, name} = film;
  const videoRef = createRef();


  function handleHidePlayer() {
    handlePauseClick();
    showVideoPageAction(!isVideoPlayer);
  }

  function handlePlayClick() {
    const video = videoRef.current;
    video.play();
    handleButtonClick();
    getCurrentTimeFilm();

  }

  function handlePauseClick() {
    const video = videoRef.current;
    video.pause();
    handleButtonClick();
  }

  function getCurrentTimeFilm() {
    const video = videoRef.current;
    video.addEventListener(`timeupdate`, function () {
      handleCurrentTimeChange(video.currentTime);
    }, false);


    video.addEventListener(`progress`, function () {
      for (let i = 0; i < video.buffered.length; i++) {
        handleFilmBuffer(video.buffered.start(i) / video.duration, video.buffered.end(i) / video.duration);
      }
    }, false);
    getFilmDuration();
  }


  function getFilmDuration() {
    const video = videoRef.current;
    handleFilmDuration(video.duration);
  }

  function openFullScreen() {
    const video = videoRef.current;
    video.requestFullscreen();
  }


  return (
    <div className="player">
      <video ref={videoRef} src={videoLink} className="player__video" poster={previewImage}/>

      <button type="button" className="player__exit" onClick={handleHidePlayer}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={buffered[1] * 100} max="100"/>
            <div className="player__toggler" style={{left: `${currentTimeFilm / durationFilm * 100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{secToTime(currentTimeFilm)}</div>
        </div>

        <div className="player__controls-row">

          {isPlaying
            ? <button type="button" className="player__play" onClick={handlePauseClick}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"/>
              </svg>
              <span>Pause</span>
            </button>
            : <button type="button" className="player__play" onClick={handlePlayClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>}
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" onClick={openFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isVideoPlayer: getIsVideoPlayer(state),
});

const mapDispatchToProps = (dispatch) => ({
  showVideoPageAction(value) {
    dispatch(showVideoPage(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withActivePlayer(MainVideoPlayer));

MainVideoPlayer.propTypes = {
  showVideoPageAction: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  isVideoPlayer: PropTypes.bool.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handleCurrentTimeChange: PropTypes.func.isRequired,
  currentTimeFilm: PropTypes.number.isRequired,
  durationFilm: PropTypes.number.isRequired,
  handleFilmDuration: PropTypes.func.isRequired,
  handleFilmBuffer: PropTypes.func.isRequired,
  buffered: PropTypes.array.isRequired,
};
