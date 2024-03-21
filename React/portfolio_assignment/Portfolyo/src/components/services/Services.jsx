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
    <section className='h-screen flex flex-col justify-center'>
        <div className='border-t border-b border-gray-black'>

          <ul className='flex justify-evenly'>

            {serviceData.map((service,index)=>(
               <a key={index} href={service.link} className='relative group'>
                <li className='h-52 w-44 border border-gray-black flex justify-center items-center'>
                  <div className='relative' >

                    <div className=''>
                      <img src={service.image}
                        alt={service.alt} className='block group-hover:hidden'/>
                    </div>

                    <h3 className='hidden group-hover:block absolute  transform -translate-x-1/2 -translate-y-1/2 text-white'>
                      
                      {service.text}
                      
                    </h3>

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