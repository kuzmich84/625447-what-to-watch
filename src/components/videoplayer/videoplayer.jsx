import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import propsVideoPlayer from './props';


export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.start = null;

    this._startVideo = this._startVideo.bind(this);
    this._stopVideo = this._stopVideo.bind(this);
  }

  _startVideo() {
    const video = this.videoRef.current;
    this.start = setTimeout(() => video.play(), 1000);
  }

  _stopVideo() {
    clearTimeout(this.start);
  }

  componentDidUpdate() {
    const video = this.videoRef.current;
    if (this.props.isPlaying) {
      this._startVideo();
    } else {
      this._stopVideo();
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }

  componentWillUnmount() {
    this._stopVideo();
  }

  render() {
    const {handlerMouseOverCard, handlerMouseOutCard, film, i} = this.props;
    const {id, name, previewImage, videoLink} = film;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => handlerMouseOverCard(film, i)}
        onMouseOut={() => handlerMouseOutCard()}
      >
        <div className="small-movie-card__image">
          <video ref={this.videoRef} width="280" height="175" muted poster={previewImage}>
            <source src={videoLink} type='video/mp4'/>
          </video>
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
        </h3>
      </article>

    );
  }
}

VideoPlayer.propTypes = propsVideoPlayer;


