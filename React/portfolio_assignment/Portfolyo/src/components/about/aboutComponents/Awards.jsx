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
    <div className='m-20 flex flex-col gap-8'>

      <h3 className='text-4xl text-white'>
        We’re a team of creatives who are excited about unique ideas and help IT-tech companies to make identity
        by crafting UI/UX.
      </h3>

      <ul className='flex justify-center items-center gap-4'>

        {certificate.map((certificate,index)=>(
          <li key={index}>
          <div >
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