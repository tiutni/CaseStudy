import React from 'react'
import '../css/Play.css'



export default function Play() {

  return (
    <div>
      <video
            id='vid'
            src={process.env.PUBLIC_URL + '/resources/이상한변호사.mp4'}
            poster={process.env.PUBLIC_URL + '/resources/이상한변호사.jpg'} 
            autoplay={true}
            muted={true}
            controls={true}
        ></video>
    </div>
  );
}
