import React from 'react';
import { Link , NavLink } from 'react-router-dom'


function Header() {

  const navLink  = [
    {
      link:"/",
      text:"Home",
    },
    {
      link:"/services",
      text:"Services",
    },
    {
      link:"/about",
      text:"About",
    },
    {
      link:"/project",
      text:"Project",
    },
    {
      link:"/review",
      text:"Review",
    },
    {
      link:"contact",
      text:"Contact",
    },
  ]


  return (
    <header className=' bg-black h-16 mx-16 my-4 p-2 flex justify-between'>
    
    <div className='flex-none m-3 p-3'>
      <Link to="/">
        <img src="../src/assets/images/logo.svg" className='h-8 w-40' />
      </Link>
    </div>

    <nav className='grow my-3 mx-28 p-3'>

      <ul className='flex justify-around'>

        {navLink.map((navLink,index)=>(
          <li key={index} className='p-1'>
            <NavLink to={navLink.link} className={({isActive})=>`hover:text-white ${isActive?"text-white":"text-gray-400"}`}>{navLink.text}</NavLink>
          </li>
        ))}

      </ul>

    </nav>

    <div className='text-white bg-gray-black flex-none m-1 p-1 h-14 w-40 flex items-center justify-center hover:bg-black hover:border hover:border-white'>
      <Link to="/" className='flex justify-evenly'>
        <span>Get A Quote</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </Link>
    </div>

  </header>
  );
}

export default Header;