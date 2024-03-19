import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className='border-solid border-t-2 border-gray-800 '>
      <div className='flex h-20 mx-32 justify-between items-center'>
        <div>
          <p>
            Copyright & Design By @codewithsadee - 2022
          </p>
        </div>
        <Link to="/" className='flex justify-evenly text-white'>
          <div className='h-20 w-36 border-solid border-x-2 border-gray-800 flex items-center justify-center'>
              <span>Back To Top</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
              </span>
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;