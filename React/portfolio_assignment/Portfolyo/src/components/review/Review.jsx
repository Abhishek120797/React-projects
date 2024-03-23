import React from 'react';

function Review() {
  return (
    <section className='flex flex-col items-center h-[100vh]'>

          <div className='m-8 md:m-16 flex flex-col gap-10'>

            <blockquote className='text-2xl md:text-4xl order-2 md:order-1'>
              &ldquo; The average national hourly rate for house cleaning services is $25 to $90 per individual, or $50
              to $90 per hour. The size and condition of your home will strongly impact the price of these. &rdquo;
            </blockquote>

            <div className='flex space-x-6 order-1 md:order-2'>
              <figure>
                <img src="./src/assets/images/client.png" alt="Alexis browni JR."
                 className='h-20 md:h-28' />
              </figure>

              <div>
                <p className='text-xl'>Alexis browni JR.</p>

                <p>Founder of alxis co.</p>
              </div>
            </div>

          </div>

      </section>
  );
}

export default Review;