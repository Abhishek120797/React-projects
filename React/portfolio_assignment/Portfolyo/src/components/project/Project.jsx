import React,{useState} from 'react';
import { useOutletContext } from 'react-router-dom';

function Project() {

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
  })
  

  const [currentSlide, setCurrentSlide] = useState(Math.floor(projectData.length/2)-1);

  const nextSlide = ()=>{
    setCurrentSlide((prevSlide)=>(prevSlide === projectData.length-3 ? 0 : prevSlide+1))
  }

  const prevSlide = ()=>{
    setCurrentSlide((prevSlide)=>(prevSlide === 0 ? projectData.length - 3 : prevSlide-1))
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
            {currentSlide!==0 && <button onClick={prevSlide} className="bg-gray-black text-white px-4 py-2 rounded-md hover:bg-black hover:border hover:border-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>}
          </div>

        <ul className='flex justify-center items-center gap-3'>

          {projectData.map((project,index)=>(

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
          {currentSlide!== projectData.length-3 && <button onClick={nextSlide} className="bg-gray-black text-white px-4 py-2 rounded-md hover:bg-black hover:border hover:border-white">
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