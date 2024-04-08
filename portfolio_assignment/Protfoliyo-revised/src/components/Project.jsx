import React from 'react';

function Project({user}) {

  const projectData = user.projects.map((project)=>{
    return {
      image:project.image.url,
      alt:project.description,
      link:project.githuburl,
      heading:{
        link:project.githuburl,
        text:project.title
      }
    }
  }).reverse()


  return (
    <>
    
    <section className="section cta" aria-label="work with me">
          <div className="container">
  
            <h2 className="title h2 section-title text-center">
              Let's Work Together On Your Next Project!
            </h2>
  
            <a href="#" className="btn btn:hover">
              <span className="span">Hire Me Now</span>
  
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
  
          </div>
    </section>
    
    <section className="section project" aria-label="my latest projects" id="project">
  
    <ul className="slider-list">

    {projectData.map((project,index)=>(
      <li key={index} className="slider-item">
        <div className="project-card text-center">

          <div className="card-banner img-holder has-before" style={{'--width': '1000','--height':' 763'}}>
            <img src={project.image} width="1000" height="763" loading="lazy"
              alt={project.alt} className="img-cover"/>

            <a href={project.link} className="btn btn:hover">
              <span className="span">Project Details</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>

          <div className="card-content">
            <p className="card-subtitle">Web, Product</p>

            <h3 className="title h3">
              <a href={project.heading.link} className="card-title">{project.heading.text}</a>
            </h3>
          </div>

        </div>
      </li>
))}
    </ul>

    </section>
  </>
  );
}

export default Project;