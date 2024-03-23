import React from 'react';

function Exhibition() {

  const exhibitioon = [
    {
      image:"../src/assets/images/exhibition-1.jpg",
      alt:"image",
    },
    {
      image:"../src/assets/images/exhibition-2.jpg",
      alt:"video",
    },
    {
      image:"../src/assets/images/exhibition-3.jpg",
      alt:"music",
    },
    {
      image:"../src/assets/images/exhibition-4.jpg",
      alt:"image",
    },
    {
      image:"../src/assets/images/exhibition-5.jpg",
      alt:"image",
    },
    {
      image:"../src/assets/images/exhibition-6.jpg",
      alt:"image",
    },
  ]

  return (
    <div className='m-16'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>

      {exhibitioon.map((exhibition,index)=>(
        <li key={index}>
        <div >

          <figure>
            <img src={exhibition.image} alt={exhibition.alt}/>
          </figure>

        </div>
      </li>

      ))}

      </ul>
    </div>
  );
}

export default Exhibition;