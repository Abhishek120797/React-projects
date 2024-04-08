import React from 'react';
import { NavLink,useLocation } from 'react-router-dom';


function AboutNavBar() {

  const aboutNavLink = [
    {
      link:"/about",
      text:"About Me",
    },
    {
      link:"/about/skillset",
      text:"Skillset",
    },
    {
      link:"/about/interview",
      text:"Interview",
    },
    {
      link:"/about/awards",
      text:"Awards",
    },
    {
      link:"/about/exhibition",
      text:"Exhibition",
    },
  ]

  const location = useLocation()

  return (
    <nav >

      <ul className='flex flex-wrap justify-center'>

          {aboutNavLink.map((navLink,index)=>(
            <NavLink key={index} 
            to={navLink.link} 
            className={`block text-white ${location.pathname === navLink.link?"bg-gray-black":"bg-black"}`}
            >
              <li className='border border-gray-black p-2 w-28 h-14 md:w-60 md:h-20 flex justify-center items-center'>
              {navLink.text}
              </li>
            </NavLink>
          ))}

      </ul>

    </nav>
  );
}

export default AboutNavBar;