import React from 'react'
import Video from './video'
const HomeHeroText = () => {
    return (
        // heading
        <div className='font-[font2] text-white pt-5 text-center'>
            <div className=' text-[5vw] uppercase leading-20' >Velowolves </div>
            <div className=' text-[5vw] uppercase leading-13 justify-center flex items-center '> Iron  <div className=' h-[10vw] rounded-full overflow-hidden'><Video/></div><span className='text-red-600'>man  </span>
              </div>
            <div className=' text-[5vw] uppercase leading-14 '>Journey</div>
        </div>
    )
}

export default HomeHeroText
