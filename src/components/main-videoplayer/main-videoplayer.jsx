import React from "react";
import {connect} from "react-redux";
import {showVideoPage} from "../../store/action";
import PropTypes from "prop-types";
import withActivePlayer from "../../hocs/withActivePlayer";
import {secToTime} from "../../utils";
import {getIsVideoPlayer} from "../../store/selectors";


const MainVideoPlayer = ({
  showVideoPageAction, film, isVideoPlayer, isPlaying, currentTimeFilm, durationFilm, buffered, children,
  handlePauseClick, handlePlayClick, openFullScreen,

}) => {
  const {name} = film;

  function handleHidePlayer() {
    handlePauseClick();
    showVideoPageAction(!isVideoPlayer);
  }
  return (
    <div className="player">
      {children}

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
  isPlaying: PropTypes.bool.isRequired,
  currentTimeFilm: PropTypes.number.isRequired,
  durationFilm: PropTypes.number.isRequired,
  buffered: PropTypes.array.isRequired,
  children: PropTypes.object.isRequired,
  handlePauseClick: PropTypes.func.isRequired,
  handlePlayClick: PropTypes.func.isRequired,
  openFullScreen: PropTypes.func.isRequired,
};
