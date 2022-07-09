import React from 'react'
import '../../public/css/Play.css';

export default function Play() {
    
  return (
    <div>
      <div className="container">
          <video poster="../../public/resources/이상한변호사.jpg" autoPlay muted controls>
            <source src="../../public/resources/이상한변호사.mp4" type='video/mp4'></source>
          </video>
      </div>
    </div>
  );
}
