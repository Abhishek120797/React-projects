import React from 'react';

function Service({user}) {


  const serviceData = user.services.map((service)=>{
    return {
      image:service.image.url,
      alt:"service icon",
      link:"#",
      text:service.name
    }
  })

  return (
    <section className="service text-center" aria-label="my services" id="service">
      <div className="container">

        <ul className="service-list">

        {serviceData.map((service,index)=>(
          <li key={index} className="service-item">
            <div className="service-card">

              <div className="card-icon">
                <img src={service.image} width="80" height="80" loading="lazy"
                  alt={service.alt}/>
              </div>

              <h3 className="card-title">
                <a href={service.link}>
                {service.text}
                </a>
              </h3>

            </div>
          </li>
        ))}
        
        </ul>

      </div>
    </section>
  );
}

export default Service;