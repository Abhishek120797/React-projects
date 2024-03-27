import React from 'react';

function Awards() {

  const certificate = [
    {
      image:"../awward-1.jpg",
      alt:"certificate",
    },
    {
      image:"../awward-2.jpg",
      alt:"certificate",
    },
    {
      image:"../awward-3.jpg",
      alt:"certificate",
    },
  ]

  return (
    <div className='flex flex-col items-center gap-4 m-10 p-10'>

      <h3 className='text-2xl md:text-3xl lg:text-4xl text-center'>
        We’re a team of creatives who are excited about unique ideas and help IT-tech companies to make identity
        by crafting UI/UX.
      </h3>

      <ul className='flex flex-col flex-wrap md:flex-row justify-center items-center gap-6'>

        {certificate.map((certificate,index)=>(
          <li key={index}>
          <div className='h-48 w-64 md:h-72 md:w-96'>
            <figure >
              <img src={certificate.image} alt={certificate.alt}
                />
            </figure>
          </div>
        </li>
        ))}

      </ul>

    </div>
  );
}

export default Awards;