import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.png"
import photo5 from "../assets/photo5.png"
import photo6 from "../assets/photo6.png"
import photo7 from "../assets/photo7.jpg"
import photo12 from "../assets/photo12.jpg"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Coaches = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [photo1, photo2, photo5, photo6, photo3, photo7,photo12]

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  // team page 
  const teamData = [
    { role: "Ironman Coach", name: "BALPREET SINGH" },
    { role: "Swimming Coach", name: "MRIDUL KHANAL " },
    { role: "Cycling Coach", name: "MALAY GUPTA" },
    { role: "Running Coach", name: "DINESH KUMAR" },
    { role: "Gym Trainner", name: "JASWANT SINGH" },
    { role: "Short course Coach", name: "MRIDUL KHANAL" },
    { role: "Cycling Coach(F)", name: "VISHU DHAMA" },
    { role: "Ultra Cycling Coach", name: "VIVEK KHAROHAR" },
    { role: "Ultra Run Coach", name: "SANJAY KUMAR" },
    { role: "Nutritionist", name: "SUKHDA KHANAL" },
    { role: "Physiotherapist", name: "KISHAN BAHADUR" },
    { role: "Tech Admin", name: "Yash raj sharma " },

  ];

  return (
    <div>
      <div className='section1'>

        {/* GSAP  */}
        <div 
          ref={imageDivRef} 
          className='absolute overflow-hidden rounded-3xl h-[17vw] w-[15vw] top-80 left-[32vw] bg-amber-900'
        >
          <img ref={imageRef} className='h-full w-full object-cover' src={photo1} alt="" />
        </div>

        {/* Heading and paragraph */}
        <div className='relative font-[font2]'>
          <div className='text-black mt-140'>
            <h1 className='text-[10vw] text-center uppercase leading-[0.8]'>
              grit <br />
              determination <br />
              discipline
            </h1>
          </div>

          <div className='pl-[40%] mt-20'>
            <p className='text-5xl'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Velowolves offers specialized Ironman and long-distance endurance sports coaching. Their training philosophy emphasizes consistency, structured swim, bike, and run volume, and prioritizing strategic recovery to maximize adaptation. The focus is on building a massive aerobic engine and the mental fortitude required for the extreme demands of triathlon racing.
            </p>
          </div>
        </div>

        <div className='section2'></div>
      </div>

      {/* team page */}
      <div className='bg-black text-white w-full mt-40'>
        {teamData.map((member, index) => (
          <div 
            key={index} 
            className='flex justify-between items-center border-b border-white/20 py-10 px-10'
          >
            <h3 className='text-lg font-light'>{member.role}</h3>
            <h1 className='text-4xl md:text-5xl font-bold tracking-tight uppercase'>
              {member.name}
            </h1>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default Coaches
