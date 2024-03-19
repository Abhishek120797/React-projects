import React from 'react';
import { useState } from 'react';


function Project() {

  const project = [
    {
      image:"./src/assets/images/project-1.jpg",
      alt:"Project poster: Creative & experienced digital design studio",
      link:"#",
      heading:{
        link:"#",
        text:"Creative & experienced digital design studio",
      },
    },
    {
      image:"./src/assets/images/project-2.jpg",
      alt:"Project poster: Front End Development & Maintenance",
      link:"#",
      heading:{
        link:"#",
        text:"Front End Development & Maintenance",
      },
    },
    {
      image:"./src/assets/images/project-3.jpg",
      alt:"Project poster: Flutter Framework & Warframe Design",
      link:"#",
      heading:{
        link:"#",
        text:"Flutter Framework & Warframe Design",
      },
    },
    {
      image:"./src/assets/images/project-4.jpg",
      alt:"Project poster: Full Web Development Project With JavaScript",
      link:"#",
      heading:{
        link:"#",
        text:"Full Web Development Project With JavaScript",
      },
    },
    {
      image:"./src/assets/images/project-5.jpg",
      alt:"Project poster: Cloud Migration & AWS Services",
      link:"#",
      heading:{
        link:"#",
        text:"Cloud Migration & AWS Services",
      },
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(Math.floor(project.length/2)-1);
  
  const nextSlide = ()=>{
    setCurrentSlide((prevSlide)=>(prevSlide === project.length-3 ? 0 : prevSlide+1))
  }

  const prevSlide = ()=>{
    setCurrentSlide((prevSlide)=>(prevSlide === 0 ? project.length - 3 : prevSlide-1))
  }

  return (
    <div className='h-screen'>
      <section className='h-[9rem] my-14'>
        <div className='flex justify-around items-center border-t border-b border-gray-black h-full'>

          <h2 className='text-5xl'>
            Let's Work Together On Your Next Project!
          </h2>

          <a href="#" className='text-white bg-gray-black flex-none m-1 p-1 h-16 w-40 hover:bg-black hover:border hover:border-white flex justify-center items-center'>
            <span>Hire Me Now</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>

        </div>
      </section>
      <section className='mx-20 flex justify-center items-center gap-2'>

          <div className='flex items-center h-20 w-24'>
            {currentSlide!==0 && <button onClick={prevSlide} className="bg-gray-black text-white px-4 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>}
          </div>

        <ul className='flex justify-center items-center'>

          {project.map((project,index)=>(

            <li key={index} className={`group ${index >= currentSlide && index< currentSlide+3?'block':'hidden'}`}>

              <div className='h-[30rem] flex flex-col justify-center items-center'>

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

            </li>

          ))}

        </ul>

          <div className='flex items-center h-20 w-24'>
          {currentSlide!== project.length-3 && <button onClick={nextSlide} className="bg-gray-black text-white px-4 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>}
          </div>

      </section>
    </div>
    
  );
}

export default Project;