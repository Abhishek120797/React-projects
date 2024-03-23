import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import AboutNavBar from './aboutComponents/AboutNavBar';


function About() {

  const user = useOutletContext()
  return (
    <section className=''>
      <div className=''>
        <AboutNavBar/>
        <Outlet context={user}/>
        </div>
    </section>
  );
}

export default About;