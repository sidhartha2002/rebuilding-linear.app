import React from "react";
import YouTube from "react-youtube";

class MovieClip extends React.Component {
  render() {
    const options = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return (
      <YouTube
        className="z-50"
        videoId="fCVm5U2ob8U"
        options={options}
        onReady={this._onReady}
        id="video"
      />
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default MovieClip;
