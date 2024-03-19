import React from 'react';
import { Outlet } from 'react-router-dom';
import AboutNavBar from './aboutComponents/AboutNavBar';

function About() {
  return (
    <section className='h-screen'>

      <div className='flex flex-col justify-center items-center border-l border-r border-b border-gray-black mx-40 mt-11'>
        <AboutNavBar/>
        <Outlet/>
      </div>

    </section>
  );
}

export default About;