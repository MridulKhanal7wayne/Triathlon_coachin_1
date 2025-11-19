import React from 'react'
import { useNavigate } from "react-router-dom";

const FullscreenNav = () => {
    const navigate = useNavigate();

     
  return (
    <div id='fullscreennav' className='  text-black h-screen py-40 w-full absoluteb bg-white'>
      <div className='' >
        <div className='link border-y-1  border-black'>
            <h1   onClick={() => navigate("/projects")} 
            className='font-[font1]  hover:bg-red-500 transition-all text-[10vw] text-center leading-[0.8] pt-10 uppercase '>Programs</h1>
            

        </div>
        <div className='link border-y-1 border-black'>
            <h1  onClick={() => navigate("/coaches")} className='font-[font1]  hover:bg-red-500 text-[10vw] text-center leading-[0.8] pt-10 uppercase '>Coaches </h1>
            
        </div>
      </div>
        <div  className='link border-y-1 border-black'> 
            <h1 onClick={() => navigate("/about")} className='font-[font1]  hover:bg-red-500 text-[10vw] text-center leading-[0.8] pt-10 uppercase '>about </h1>
            <div>
                 
            </div>

        </div>
        <div  className='link border-y-1 border-black'> 
            <h1  onClick={() => navigate("/")}  className='font-[font1]  hover:bg-red-500 text-[10vw] text-center leading-[0.8] pt-10 uppercase '>home</h1>
            <div>
                 
            </div>

        </div>
      
    </div>
  )
}

export default FullscreenNav
