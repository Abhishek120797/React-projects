import React from 'react';

function Exhibition() {

  const exhibitioon = [
    {
      image:"../exhibition-1.jpg",
      alt:"image",
    },
    {
      image:"../exhibition-2.jpg",
      alt:"video",
    },
    {
      image:"../exhibition-3.jpg",
      alt:"music",
    },
    {
      image:"../exhibition-4.jpg",
      alt:"image",
    },
    {
      image:"../exhibition-5.jpg",
      alt:"image",
    },
    {
      image:"../exhibition-6.jpg",
      alt:"image",
    },
  ]

  return (
    <div className='flex flex-col items-center gap-4 m-10 p-4'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>

      {exhibitioon.map((exhibition,index)=>(
        <li key={index}
        className='border border-gray-black'
        >
        <div className=''>

          <figure className='h-52'>
            <img src={exhibition.image} alt={exhibition.alt} className='h-full w-full object-cover'/>
          </figure>

        </div>
      </li>

      ))}

      </ul>
    </div>
  );
}

export default Exhibition;