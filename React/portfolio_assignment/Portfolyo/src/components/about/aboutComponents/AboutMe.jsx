import React from 'react';

function AboutMe() {
  return (
      <div className='h-[33rem] flex items-center space-x-12' >

        <figure >
          <img src="./src/assets/images/about-banner.jpg" alt="about banner"/>
        </figure>

        <div className='w-[30rem] flex flex-col space-y-4'>

          <h2 className='text-white text-4xl'>
            A very small stage in a vast cosmic.
          </h2>

          <p >
            A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica star
            stuff harvesting star light the carbon in our apple pies realm of the galaxies
          </p>

          <ul className='grid grid-cols-2 gap-y-2'>

            <li>
              <p >Name</p>

              <span className='text-white text-lg'>Drew Hays</span>
            </li>

            <li >
              <p >Phone Number</p>

              <span className='text-white text-lg'>123. 456. 789. 01</span>
            </li>

            <li >
              <p >Email Address</p>

              <span className='text-white text-lg'>info@drew.com</span>
            </li>

            <li >
              <p >Social Network</p>

              <div className='text-white text-lg'>

                <a href="#"  title="Facebook">Fb.</a>
                <a href="#"  title="Behance">Be.</a>
                <a href="#"  title="Linkedin">Ln.</a>
                <a href="#"  title="Dribbble">Dr.</a>

              </div>
            </li>

          </ul>

        </div>

      </div>
  );
}

export default AboutMe;