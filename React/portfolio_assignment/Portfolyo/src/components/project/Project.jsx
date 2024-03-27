import React from 'react';
import Slider from './Slider'


function Project() {

  
  return (
    <>
      <section className='h-[9rem]'>
        <div className='flex flex-col md:flex-row justify-around items-center border-t border-b border-gray-black h-full'>

          <h2 className='text-lg md:text-3xl lg:text-5xl'>
            Let's Work Together On Your Next Project!
          </h2>

          <a href="#" className='flex flex-col md:flex-col justify-evenly items-center lg:flex-row gap-1 text-white bg-gray-black h-16 w-28  lg:h-16 lg:w-40 m-1 p-1 lg:m-2 lg:p-2 hover:border hover:border-white hover:bg-black transition hover:duration-300 hover:ease-in-out'>
            <span>Hire Me Now</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>

        </div>
      </section>
      
      <Slider/>
      
    </>
    
  );
}

export default Project;