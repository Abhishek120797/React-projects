import React from 'react';
import { Link , NavLink } from 'react-router-dom'
import { useState } from 'react';

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

  const [toggle, setToggle] = useState(false);
  
  

  return (
    
      <header className='bg-black flex justify-between items-center fixed w-full z-10'>

        
          {/* logo */}
          <div className='m-1 p-1  flex justify-center items-center'>

            <Link to="/">
              <img src="./logo.svg" className=''/>
            </Link>

          </div>


          {/* navigation links */}
          <nav className={`m-1 p-1 lg:w-3/4 flex flex-col md:flex-row md:justify-between items-center  absolute  md:static  ${toggle?"  w-[70%] md:w-auto top-[60px] right-0 bg-black":"hidden md:flex"}`}>

            <ul className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 xl:gap-6 text-slate-500'>

              {navLink.map((navLink,index)=>(

                <NavLink to={navLink.link } 
                key={index}
                onClick={()=>setToggle(toggle && !toggle)} 
                className={({isActive})=>`${isActive && "text-white"}`}>
                  <li  className='text-lg md:text-xl lg:text-2xl m-1 p-1 hover:text-white '>
                    {navLink.text}
                  </li>
                </NavLink>
              ))}

            </ul>

            {/* get Quote button */}
            <Link to="/"
            onClick={()=>setToggle(toggle && !toggle)}
            >
              <div className='flex flex-col md:flex-col justify-evenly items-center lg:flex-row gap-1 text-white bg-gray-black h-16 w-28  lg:h-16 lg:w-40 m-1 p-1 lg:m-2 lg:p-2 hover:border hover:border-white hover:bg-black transition hover:duration-300 hover:ease-in-out'>

                <span className='text-lg lg:text-xl'>Get A Quote</span>

                <span>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>

                </span>

              </div>
            </Link>


          </nav>
          

          {/* toogle button */}
          <div className='m-1 p-1 md:hidden'>

            <button onClick={()=>setToggle(!toggle)}
            className='h-12 w-12'>

              <span className={`${toggle?'hidden':'block'}`}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-10 h-10 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </span>

              <span className={`${!toggle?'hidden':'block'}`}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

              </span>

            </button>

          </div>

      </header>
    
  );
}

export default Header;