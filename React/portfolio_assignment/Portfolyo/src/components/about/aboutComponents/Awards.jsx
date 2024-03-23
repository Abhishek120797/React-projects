import React from 'react';

function Awards() {

  const certificate = [
    {
      image:"../src/assets/images/awward-1.jpg",
      alt:"certificate",
    },
    {
      image:"../src/assets/images/awward-2.jpg",
      alt:"certificate",
    },
    {
      image:"../src/assets/images/awward-3.jpg",
      alt:"certificate",
    },
  ]

  return (
    <div className='m-10 flex flex-col gap-8'>

      <h3 className='text-xl md:text-4xl text-white'>
        We’re a team of creatives who are excited about unique ideas and help IT-tech companies to make identity
        by crafting UI/UX.
      </h3>

      <ul className='flex flex-col flex-wrap lg:flex-nowrap md:flex-row justify-center items-center gap-6'>

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