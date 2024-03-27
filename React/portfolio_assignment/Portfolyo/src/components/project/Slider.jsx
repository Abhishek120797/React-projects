import React from 'react';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Slider() {


  const user = useOutletContext()

  const projectData = user.projects.map((project)=>{
    return {
      image:project.image.url,
      alt:project.description,
      link:project.githuburl,
      heading:{
        link:project.githuburl,
        text:project.title
      }
    }
  }).reverse()


  const [currentIndex, setCurrentIndex] = useState(Math.floor(projectData.length/2));
  

  const nextSlide = ()=>{
    setCurrentIndex((currentIndex)=>(currentIndex<=projectData.length-1 && currentIndex + 1)) 
    
  }

  const prevSlide = ()=>{
    setCurrentIndex((currentIndex)=>(currentIndex>0 && currentIndex - 1))
  }


  return (
    <div className='flex justify-around items-center'>

        {/* previous button */}
        <button
        disabled={currentIndex===0} 
        onClick={prevSlide}
        className={` text-white  h-10 w-10 rounded-full`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>


        {/* slides */}
        <div className=''>

          {projectData.map((project,index)=>(

            <div key={index} className={`group ${index===currentIndex?"block":"hidden"}`}>

              <div className='h-[30rem] min-w-[250px] min-h-[325px] flex flex-col justify-center items-center'>

                  <img src={project.image} alt={project.alt} className='h-[325px] group-hover:filter group-hover:brightness-50 transition duration-300'/>

                  <a href={project.link} className='hidden group-hover:flex absolute  text-white h-14 w-40 bg-gray-black justify-center items-center hover:bg-transparent  hover:border-2 hover:font-bold transition duration-300'>

                    <div className="flex justify-center items-center text-white">
                      <span>Project Details</span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>

                  </a>
                
                <div className='flex flex-col justify-center items-center'>
                  <p >Web, Product</p>

                  <h3 className='text-white text-[2rem]'>
                    <a href={project.heading.link} >{project.heading.text}</a>
                  </h3>
                </div>

              </div>

            </div>

          ))}

        </div>



        {/*Next button */}
        <button
        disabled={currentIndex===projectData.length-1} 
        onClick={nextSlide}  
        className={` text-white w-10 h-10 rounded-full`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>

    </div>
  );
}

export default Slider;