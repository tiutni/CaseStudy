import React from 'react'
import '../css/Play.css'

const Play = () => {

  return (
    <div>
      <video
          src={process.env.PUBLIC_URL + '/resources/이상한변호사.mp4'}
          poster={process.env.PUBLIC_URL + '/resources/이상한변호사.jpg'}
          autoPlay
          muted
          controls
      ></video>
    </div>
  );
}

export default Play;