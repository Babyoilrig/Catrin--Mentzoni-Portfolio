import React from 'react'
import YouTube from "react-youtube";

export default class YoutubeVideo 
extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <div class="grid gap-0 grid-cols-1 grid-rows-1 place-items-center content-center border-solid border-2 border-black rounded-lg mt-8 w-full md:w-screen ">
      <h1 class="text-center font-roboto text-5xl font-bold">Introduction</h1>
      <br/><br/>
      <div id="video-container">
        <YouTube id="video" videoId="GNbKZls3W4w" 
            opts={opts} onReady={this._onReady} />
            </div>
            <br/><br/><br/>
      </div>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}