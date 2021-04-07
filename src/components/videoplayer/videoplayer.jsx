import React, {PureComponent} from "react";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {previewImage, videoLink} = this.props;
    const video = this.videoRef.current;
    video.poster = previewImage;
  }

  render() {
    const {previewImage, videoLink} = this.props;
    return (
      <video ref={this.videoRef} width="280" height="175" muted autoPlay
        onMouseOver={() => console.log(`video`)}>
        <source src={videoLink} type='video/mp4'/>
      </video>
    );
  }
}


