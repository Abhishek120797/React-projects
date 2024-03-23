import React from 'react';
import {Link} from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

function Home() {
  
  const user = useOutletContext()

  return (
    <div className=' m-2 p-2 md:m-10 md:p-10 '>
      
        <div className=' flex flex-col justify-center gap-32 items-center md:flex-row'>

{/* Image and Name */}
          <div className='flex flex-col items-center md:order-2'>

            <div className='mb-[-6rem] md:mb-[-8rem]'>
              <img src={user.about.avatar.url} alt="Drew Hays" className='rounded-full h-96 md:h-[500px]  object-cover' />
            </div>

            <span className='text-[2rem] md:text-[3rem] text-white'>{user.about.name}</span>

          </div>

{/* Text and Download cv */}
          <div className='flex flex-col justify-center items-center gap-12 h-auto w-full md:w-[600px] md:order-1'>

            <h1 className='text-[3rem] md:text-[5rem] text-white text-center m-1 p-1'>Get Your Product Identity From Me.</h1>

            <div className='flex flex-col md:flex-row justify-between items-center gap-12 md:space-x-10'>

                <Link to="/" className=' h-20 w-52 text-white bg-gray-black flex justify-evenly items-center hover:bg-black hover:border hover:border-white'>
                  <span>Download CV</span>

                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                  </span>
                </Link>

              <div className='md:text-[1.25rem]'>
                <p>
                    From device to cloud to edge Innovate from anywhere with secure
                </p>
              </div>
            </div>

          </div>

        </div>

{/* shape image */}
        {/* <div className=''>
          <img src="./src/assets/images/hero-shape-1.png" alt="shape" className=''/>
          <img src="./src/assets/images/hero-shape-2.png" alt="shape" className=''/>
        </div>
         */}

    </div>
  );
}

export default Home;