import React, { useRef } from 'react'
import photo10 from "../../assets/photo10.jpg";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    
    const navredRef = useRef(null)

  return (
    <div className='z-7 rounded-full flex fixed top-0 w-full items-start justify-between'>
       <div className=' p-4'>
        <div className=' lg:w-60  '>
        <img onClick={() => navigate("/")} className='rounded-6xl brightness-{80}  ' src={photo10}alt="photo" />
       </div>
       </div>
      <div onMouseEnter={() => {
         navredRef.current.style.height = '100%'
    }}
      onMouseLeave={() => {
        navredRef.current.style.height = '0%'
    }}
    
       className=' h-15 bg-black relative w-80'>
        <div  onClick={() => navigate("/menu")}  ref={navredRef} className=' bg-red-600 text-6xl font-[font2] transition-all absolute top-0 h-0 w-full align-text-bottom text-center   '> MENU </div>
      <div className=' relative'> </div>
      </div>
    </div>
  )
}

export default Navbar
