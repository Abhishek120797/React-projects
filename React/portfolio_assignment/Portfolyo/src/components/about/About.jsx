import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import AboutNavBar from './aboutComponents/AboutNavBar';


function About() {

  const user = useOutletContext()
  return (
    <section className='h-screen'>

      <div className='flex flex-col justify-center items-center border-l border-r border-b border-gray-black mx-40 mt-11'>
        <AboutNavBar/>
        <Outlet context={user}/>
      </div>

    </section>
  );
}

export default About;