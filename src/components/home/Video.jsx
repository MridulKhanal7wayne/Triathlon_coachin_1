import React from 'react'
import IRONMAN_Trim_2 from "../../assets/IRONMAN_Trim_2.mp4";

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover" 
        src={IRONMAN_Trim_2}
      ></video>
    </div>
  )
}

export default Video;
