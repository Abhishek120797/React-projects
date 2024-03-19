import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='mx-24 px-4'>
      
        <div className='absolute grid grid-cols-2 justify-items-center items-center '>
          
          <div className='flex flex-col box-border h-auto w-[600px] justify-self-start'>

            <h1 className='text-[5rem] text-white justify-start mb-28'>Get Your Product Identity From Me.</h1>

            <div className='flex justify-between space-x-10'>
              <Link href="/" className='h-20 w-40 text-white bg-gray-black flex items-center justify-evenly hover:bg-black hover:border hover:border-white'>
                <span>Download CV</span>

                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                  </svg>
                </span>
              </Link>

              <p >
                  From device to cloud to edge Innovate from anywhere with secure
              </p>
            </div>

          </div>

          <div className='justify-self-end flex flex-col items-center'>

            <div className=' mb-[-8rem]'>
              <img src="./src/assets/images/hero-banner.jpg" alt="Drew Hays" className='rounded-full h-[500px] w-[400px] object-cover ' />
            </div>

            <span className='text-[3rem] text-white'>Drew Hays</span>

          </div>

        </div>

        <div className=''>
        <img src="./src/assets/images/hero-shape-1.png" alt="shape" className=''/>
        <img src="./src/assets/images/hero-shape-2.png" alt="shape" className=''/>
        </div>
        

    </div>
  );
}

export default Home;