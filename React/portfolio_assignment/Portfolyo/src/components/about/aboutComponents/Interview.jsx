import React from 'react';

function Interview() {

  const interview = [
    {
      image:"../src/assets/images/interview-1.jpg",
      alt:"interview 1",
    },
    {
      image:"../src/assets/images/interview-2.jpg",
      alt:"interview 1",
    },
    {
      image:"../src/assets/images/interview-3.jpg",
      alt:"interview 1",
    }
  ]

  return (
    
      <div className='flex flex-col items-center justify-center m-2 md:flex-row gap-6'>

        {interview.map((interview,index)=>(
          <div key={index} className='relative'>

            <img src={interview.image} alt={interview.alt} className=""/>

            <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full w-12 h-12 text-black flex items-center justify-center hover:bg-transparent hover:border-white hover:font-bold border-2 border-transparent transition duration-300'>Play</button>

          </div>
        ))}


      </div>
  );
}

export default Interview;