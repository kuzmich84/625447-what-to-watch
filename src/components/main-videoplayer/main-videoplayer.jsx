import React, {createRef} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";
import withActivePlayer from "../../hocs/withActivePlayer";
import {secToTime} from "../../utils";


const MainVideoPlayer = ({showVideoPageAction, film, isVideoPlayer, handleButtonClick, isPlaying, handleCurrentTimeChange, currentTimeFilm, durationFilm, handleFilmDuration}) => {
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
    getFilmDuration();

  }

  function getFilmDuration() {
    const video = videoRef.current;
    handleFilmDuration(video.duration);
  }


  return (
    <div className="player">
      <video ref={videoRef} src={videoLink} className="player__video" poster={previewImage}/>

      <button type="button" className="player__exit" onClick={handleHidePlayer}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{left: `${currentTimeFilm / durationFilm * 100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{secToTime(currentTimeFilm)}</div>
        </div>

        <div className="player__controls-row">

          {isPlaying
            ? <button type="button" className="player__play" onClick={handlePauseClick}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
            : <button type="button" className="player__play" onClick={handlePlayClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>}
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isVideoPlayer: state.isVideoPlayer,
});

const mapDispatchToProps = (dispatch) => ({
  showVideoPageAction(value) {
    dispatch(ActionCreator.showVideoPage(value));
  }
});

const Player = React.memo(MainVideoPlayer);

export default connect(mapStateToProps, mapDispatchToProps)(withActivePlayer(Player));

MainVideoPlayer.propTypes = {
  showVideoPageAction: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  isVideoPlayer: PropTypes.bool.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
