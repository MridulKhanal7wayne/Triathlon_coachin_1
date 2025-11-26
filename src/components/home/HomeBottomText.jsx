import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='text-white  font-[font1] flex items-center justify-center gap-6'>
     <div className=' hover:border-red-600   hover:text-red-600 border-5 leading-[3.5vw] rounded-full lg px-14  pt-9  border-white uppercase ' > <Link to='/projects'className=' text-[6vw] '>Programs </Link></div>
     <div className='border-5  hover:border-red-600   hover:text-red-600 leading-[3.5vw] rounded-full px-14  pt-9  border-white uppercase'> <Link to='/coaches'className=' text-[6vw]  '>Coaches </Link> </div>
    </div>
  )
}

export default HomeBottomText
