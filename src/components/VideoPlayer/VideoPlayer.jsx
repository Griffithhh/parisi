import React, {useRef, useState} from 'react';
import './VideoPlaer.css'
import video from '../../assets/parisi-viedo.mp4'
const VideoPlayer = ({playState, setPlayState}) => {
  const player = useRef(null);
  const videoRef = useRef(null);
  const [play, setPlay] = useState('play');

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
      setPlay('play')
       videoRef.current.muted = true;
      videoRef.current.currentTime = 0;

    }
  };

  const musicPlayer = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (play === 'play') {
        setPlay('pause');
        videoRef.current.muted = false;

      } else {
        setPlay('play');
        videoRef.current.muted = true;
      }
    }
  };

  return (
      <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
          <div>
        <p className='play' onClick={musicPlayer}>{play}</p>
        <video ref={videoRef} src={video} autoPlay muted controls>
        </video>
        </div>
      </div>
  );
};

export default VideoPlayer;