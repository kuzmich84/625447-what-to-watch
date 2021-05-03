import React, {useEffect, useReducer, useRef, useState} from "react";
import PropTypes from "prop-types";
import {extend} from "../utils";
import {login} from "../store/api-actions";

const initialState = {
  currentTime: 0,
  durationFilm: 0,
  buffered: [0, 0],
  isLoading: true,
};

const ActionType = {
  SET_CURRENT_TIME: `SET_CURRENT_TIME`,
  SET_DURATION_FILM: `SET_DURATION_FILM`,
  SET_BUFFERED_FILM: `SET_BUFFERED_FILM`,
  SET_IS_LOADING: `SET_IS_LOADING`
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_TIME:
      return extend(state, {
        currentTime: action.payload,
      });
    case ActionType.SET_DURATION_FILM:
      return extend(state, {
        durationFilm: action.payload,
      });
    case ActionType.SET_BUFFERED_FILM:
      return extend(state, {
        buffered: action.payload,
      });
    case ActionType.SET_IS_LOADING:
      return extend(state, {
        isLoading: action.payload,
      });
    default:
      return state;

  }
};

const withActivePlayer = (Component) => {

  const WithActivePlayer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const {currentTime, durationFilm, buffered} = state;
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();

    useEffect(() => {
      const {film} = props;
      videoRef.current.src = film.videoLink;
      videoRef.current.poster = film.previewImage;

      videoRef.current.oncanplaythrough = () => {
        dispatch({
          type: ActionType.SET_IS_LOADING,
          payload: false,
        });
      };


      return function cleanUpListener() {
        videoRef.current.oncanplaythrough = null;
        videoRef.current.removeEventListener(`timeupdate`, getCurrentTime);
        videoRef.current.removeEventListener(`progress`, getBufferFilm);
      };
    }, [videoRef]);


    const handleButtonClick = () => {
      setIsPlaying((prevState) => !prevState);
      handleFilmDuration();
    };

    const handleCurrentTimeChange = (time) => {
      dispatch({
        type: ActionType.SET_CURRENT_TIME,
        payload: time,
      });
    };

    const handleFilmDuration = () => {
      dispatch({
        type: ActionType.SET_DURATION_FILM,
        payload: videoRef.current.duration,
      });
    };

    const handleFilmBuffer = (startX, endX) => {
      dispatch({
        type: ActionType.SET_BUFFERED_FILM,
        payload: [startX, endX]
      });
    };

    const handlePlayClick = () => {
      const video = videoRef.current;
      video.play();
      handleButtonClick();
      getCurrentTimeFilm();
    };

    const handlePauseClick = () => {
      videoRef.current.pause();
      handleButtonClick();
    };

    const getCurrentTime = () => {
      handleCurrentTimeChange(videoRef.current.currentTime);
    };


    const getBufferFilm = () => {
      const video = videoRef.current;
      for (let i = 0; i < video.buffered.length; i++) {
        handleFilmBuffer(video.buffered.start(i) / video.duration, video.buffered.end(i) / video.duration);
      }
    };

    const getCurrentTimeFilm = () => {
      const video = videoRef.current;
      video.addEventListener(`timeupdate`, getCurrentTime, false);
      video.addEventListener(`progress`, getBufferFilm, false);
    };


    const openFullScreen = () => videoRef.current.requestFullscreen();


    return <Component
      {...props}
      handleButtonClick={handleButtonClick}
      handleCurrentTimeChange={handleCurrentTimeChange}
      handleFilmDuration={handleFilmDuration}
      handleFilmBuffer={handleFilmBuffer}
      isPlaying={isPlaying}
      currentTimeFilm={currentTime}
      durationFilm={durationFilm}
      buffered={buffered}
      handlePauseClick={handlePauseClick}
      handlePlayClick={handlePlayClick}
      openFullScreen={openFullScreen}
    >
      <video className="player__video" ref={videoRef}/>
    </Component>;
  };


  WithActivePlayer.propTypes = {
    film: PropTypes.object.isRequired,
  };
  return WithActivePlayer;


};

export default withActivePlayer;

