import React from 'react';

function Interview() {

  const interview = [
    {
      image:"../interview-1.jpg",
      alt:"interview 1",
    },
    {
      image:"../interview-2.jpg",
      alt:"interview 1",
    },
    {
      image:"../interview-3.jpg",
      alt:"interview 1",
    }
  ]

  return (
    
      <div className=''>

        <ul className='flex flex-col md:flex-row justify-center items-center gap-4 m-10 p-5'>
          {interview.map((interview,index)=>(

            <li key={index}>
              <div className='relative flex justify-center items-center'>

                <img src={interview.image} alt={interview.alt} />

                <button className='bg-white px-4 py-2 rounded-full w-12 h-12 text-black flex items-center justify-center hover:bg-transparent hover:border-white hover:font-bold border-2 border-transparent transition duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' >Play</button>

              </div>
            </li>
            
          ))}

        </ul>
      </div>
  );
}

export default Interview;