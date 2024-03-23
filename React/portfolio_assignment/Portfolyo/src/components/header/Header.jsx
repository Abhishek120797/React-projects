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
    <header className='flex justify-between items-center'>


{/* logo */}
        <div className='min-h-16 min-w-32 m-2 md:m-8 p-2 flex justify-center items-center '>

          <Link to="/">
            <img src="../src/assets/images/logo.svg" className='object-contain' />
          </Link>

        </div>


{/* navigation links */}
        <nav className={`flex justify-center items-center relative ${toggle? "top-56 left-[20%] md:top-0 md:left-0":""}`}>

          <ul className={`md:flex md:flex-row md:justify-between lg:gap-12 md:gap-2 ${toggle? "flex absolute bg-black h-[55vh] w-[25vh]  z-10  flex-col justify-center items-center":"hidden"}`}>

            {navLink.map((navLink,index)=>(
              <li key={index} className='m-2 p-1'>
                <NavLink to={navLink.link} onClick={()=>setToggle(toggle && !toggle)} className={({isActive})=>`hover:text-white text-xl ${isActive?"text-white":"text-gray-400"}`}>{navLink.text}</NavLink>
              </li>
            ))}

          </ul>

        </nav>
        

{/* get Quote button */}
        <Link to="/">
          <div className='h-12 w-36 md:m-8 p-2 text-white md:flex hidden items-center justify-evenly border border-gray-black bg-gray-black hover:bg-black hover:border-white'>

            <span>Get A Quote</span>

            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>

          </div>
        </Link>


{/* toogle button */}
        <div className='md:hidden m-2 p-2'>

          <button onClick={()=>setToggle(!toggle)}>

            <span className={`${toggle?'hidden':'block'}`}> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-10 h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>

            <span className={`${toggle?'block':'hidden'}`}>
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