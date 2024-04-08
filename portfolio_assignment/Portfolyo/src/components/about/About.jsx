import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import AboutNavBar from './aboutComponents/AboutNavBar';


function About() {

  const user = useOutletContext()
  return (
    <section className=''>
        <AboutNavBar/>
        <Outlet context={user}/>
    </section>
  );
}

export default About;