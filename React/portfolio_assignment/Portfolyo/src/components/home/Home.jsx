import React from 'react';
import {Link} from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

function Home() {
  
  const user = useOutletContext()

  return (
    <div className=''>
      
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center m-2 p-2 md:m-10 md:p-10 lg:m-16 lg:p-16'>

{/* Image and Name */}
          <div className='relative  md:order-2 m-1 p-1'>

            <div className='h-96 w-72'>
              <img src={user.about.avatar.url} 
              alt="Drew Hays" 
              className='h-full w-full object-cover rounded-full'
              />
            </div>

            <span className='absolute left-24 bottom-16 text-white text-2xl md:text-3xl'>{user.about.name}</span>

          </div>

{/* Text and Download cv */}
          <div className='flex flex-col justify-between  m-2 p-2 gap-10 md:gap-28 lg:gap-40'>

            <h1 className='text-white text-3xl md:text-5xl lg:text-6xl'>Get Your Product Identity From Me.</h1>

            
            <div className='flex flex-col md:flex-row justify-center items-center gap-14'>
              <Link to="/" >

              <div className='flex flex-col md:flex-col justify-evenly items-center lg:flex-row gap-1 text-white bg-gray-black h-16 w-28  lg:h-16 lg:w-40 m-1 p-1 lg:m-2 lg:p-2 hover:border hover:border-white hover:bg-black transition hover:duration-300 hover:ease-in-out'>
                  <span className='text-sm lg:text-xl'>Download CV</span>

                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                  </span>
                </div>
                
              </Link>

              <div className='m-1 p-1'>
                <p className='text-lg md:text-xl'>
                    From device to cloud to edge Innovate from anywhere with secure
                </p>
              </div>

            </div>

          </div>

        </div>

{/* shape image */}
        <div className='absolute top-24 z-[-1]'>
          <img src="./src/assets/images/hero-shape-1.png" alt="shape" />
          <img src="./src/assets/images/hero-shape-2.png" alt="shape" />
        </div>
        

    </div>
  );
}

export default Home;