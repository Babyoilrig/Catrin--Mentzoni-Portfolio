import React from 'react'
import YouTube from "react-youtube";
import css from './VideoSection.module.css';

// export default class YoutubeVideo 
// extends React.Component {
//   render() {
//     const opts = {
//       // height: "390",
//       // width: "640",
//       playerVars: {
//         autoplay: 1,
//       },
//     };
  
//     return (
//       <div class="grid gap-0 grid-cols-1 grid-rows-1 place-items-center content-center border-solid border-2 border-black rounded-lg mt-8 w-full md:w-screen ">
//       <h1 class="text-center font-roboto text-5xl font-bold">Introduction</h1>
//       <br/><br/>
//       <div className= {css.videoContainer} class="grid gap-0 grid-cols-1 grid-rows-1 place-items-center content-center w-[100px] md:w-auto">
//         <YouTube className={css.video} videoId="GNbKZls3W4w" 
//             opts={opts} onReady={this._onReady} />
//             </div>
//             <br/><br/><br/>
//       </div>
//     );
//   }
  
//   _onReady(event) {
//     event.target.pauseVideo();
//   }
// }



import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div class="grid gap-0 grid-cols-1 grid-rows-1 place-items-center content-center" className={css.videoResponsive}>
    <iframe className={css.video}
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Catrin Mentzoni Video"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
