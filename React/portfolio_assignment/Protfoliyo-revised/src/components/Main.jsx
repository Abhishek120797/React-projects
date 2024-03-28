import React from 'react';
import Hero from './Hero.jsx'
import Service from './Service.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Testimonial from './Testimonial.jsx'
import Contact from './Contact.jsx'


function Main({user}) {
  return (
    <main>
      <article>
  
        {/* #HERO */}
  
        <Hero user={user}/>
  
        {/* #SERVICE */}
       
        <Service user={user}/>
   
        {/* #ABOUT */}
  
        <About user={user}/>
  
        {/* #PROJECTS */}
  
        <Project user={user}/>
  
        {/* #TESTIMONIALS */}
        
        <Testimonial user={user}/>
  
        {/* #CONTACT */}
  
        <Contact user={user}/>
        
  
      </article>
    </main>
  );
}

export default Main;