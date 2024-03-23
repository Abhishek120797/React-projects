import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Contact({userData}) {

  const user = useOutletContext()
  return (
    <section className='flex flex-col justify-center'>
        <div className='flex flex-col justify-center items-center flex-wrap gap-4 m-4 md:m-8'>

          <h2 className='text-[1.5rem] md:text-[4rem] text-white'>Get In Touch</h2>

          <div className='flex flex-col flex-wrap justify-center items-center md:flex-row md:justify-center md:items-center gap-4'>

            <form action="./index.html" method="post" className='flex flex-col justify-center items-center space-y-6  '>

              <input className='bg-black text-xl border-b border-gray-black h-14 w-64  md:w-[450px] focus:outline-none focus:border-white' type="text" name="name" placeholder="Full name" autoComplete="off" required/>

              <input className='bg-black text-xl border-b border-gray-black h-14 w-64 md:w-[450px] focus:outline-none focus:border-white' type="email" name="email_address" placeholder="Email address" autoComplete="off" required
                />

              <input className='bg-black text-xl border-b border-gray-black h-14 w-64 md:w-[450px] focus:outline-none focus:border-white' type="tel" name="phone" placeholder="Phone" autoComplete="off" />

              <textarea className='bg-black text-xl border-b border-gray-black h-40 w-64 md:w-[450px] focus:outline-none focus:border-white' name="message" placeholder="Enter massges" required ></textarea>

              <button type="submit" >
                <div className='text-white bg-gray-black flex-none m-1 p-1 h-12 w-40 flex items-center justify-center hover:bg-black hover:border hover:border-white'>
                  <span>Get A Quote</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </button>

            </form>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d898.4329239267093!2d-73.91493787358391!3d40.76299026683699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1671529019371!5m2!1sen!2sbd"
              width="600" height="450" style={{"border": 0}} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" className="map h-64 w-80 md:h-[450px] md:w-[600px] m-2 p-2"></iframe>

            <div className='m-4 p-4 md:m-10 md:p-5'>
              <ul className='flex flex-col space-y-10'>

                <li className='border-b border-gray-black flex justify-between'>

                  <div className='mb-6'>
                    <img src="./src/assets/images/contact-icon-1.png" 
                      />
                  </div>

                  <div className='flex flex-col'>
                    <span >{user.about.phoneNumber}</span>
                  </div>

                </li>

                <li className=' border-b border-gray-black flex justify-between gap-10'>

                  <div className='mb-6'>
                    <img src="./src/assets/images/contact-icon-2.png"
                      />
                  </div>

                  <div className='flex flex-col'>
                    <address>
                      {user.about.address}
                    </address>
                  </div>

                </li>

                <li className='flex justify-between'>

                  <div className='mb-6'>
                    <img src="./src/assets/images/contact-icon-3.png"/>
                  </div>

                  <div className='flex flex-col'>
                    <span >{user.email}</span>
                  </div>

                </li>

              </ul>
            </div>
          </div>

        </div>
      </section>
  );
}

export default Contact;