import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1: 'https://images.squarespace-cdn.com/content/v1/60e4262d44d7285f8b935dd1/79729483-e333-4ef6-b78d-b02fc5eefdac/Ironman+finish+line.jpg',
    image2: 'https://cdn.lepape-info.com/media/2023/03/DUATHLON-1.jpg',
    title1: "All Ironman Distances",
    title2: "Duathlon Training Programs"
  }, {
    image1: 'https://www.orca-australia.com.au/libraries/images/news/2406-ColdwaterSwimming.jpg',
    image2: 'https://imageio.forbes.com/specials-images/imageserve/66793ffd9cdcbdf431254263/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
    title1: "Open Water Swimming",
    title2: "Elite Cycling Training"
  }, {
    image1: 'https://static01.nyt.com/images/2023/04/22/multimedia/22marathon-field1-bqhj/22marathon-field1-bqhj-mediumSquareAt3X-v3.jpg',
    image2: 'https://hips.hearstapps.com/hmg-prod/images/mr-221205-lcb-0041-1672943743.jpg',
    title1: "Marathon Programs",
    title2: "strength training"
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Races</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
           <ProjectCard
  image1={elem.image1}
  image2={elem.image2}
  title1={elem.title1}
  title2={elem.title2}
/>

          </div>
        })}

      </div>
    </div>
  )
}

export default Projects