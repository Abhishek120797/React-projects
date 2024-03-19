import React from 'react';

function Services() {

  const services = [
    {
      image:"./src/assets/images/service-icon-1.svg",
      alt:"service icon",
      link:"#",
      text:"Web Development"
    },
    {
      image:"./src/assets/images/service-icon-2.svg",
      alt:"service icon",
      link:"#",
      text:"Digital Marketing"
    },
    {
      image:"./src/assets/images/service-icon-3.svg",
      alt:"service icon",
      link:"#",
      text:"Graphics Design"
    },
    {
      image:"./src/assets/images/service-icon-4.svg",
      alt:"service icon",
      link:"#",
      text:"Mobile Application"
    },
  ]

  return (
    <section className='h-screen flex flex-col justify-center'>
        <div className='border-t border-b border-gray-black'>

          <ul className='flex justify-evenly'>

            {services.map((service,index)=>(
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