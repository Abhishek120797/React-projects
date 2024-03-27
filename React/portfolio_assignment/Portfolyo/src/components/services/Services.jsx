import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Services() {

  const user = useOutletContext()

  const serviceData = user.services.map((service)=>{
    return {
      image:service.image.url,
      alt:"service icon",
      link:"#",
      text:service.name
    }
  })

  return (
    <section className=''>
        <div className='m-1 p-1 md:m-4 md:p-4 min-h-screen flex flex-col md:justify-center items-center'>

          <ul className='flex flex-col md:flex-row md:flex-wrap justify-center items-center'>

            {serviceData.map((service,index)=>(

               <a key={index} href={service.link}>
                <li className='group border border-gray-black m-2'>

                  <div className='h-72 w-72 md:h-60 md:w-60  m-2 p-2 flex justify-center items-center'>

                    <div className='group-hover:hidden'>
                      <img src={service.image}
                        alt={service.alt}/>
                    </div>

                    <div className=' hidden justify-center items-center group-hover:flex'>
                      <h3 className='text-2xl text-white text-center'>{service.text}</h3>
                    </div>
                    
                  </div>

                </li>
              </a>

            ))}

          </ul>

        </div>
      </section>
  );
}

export default Services;