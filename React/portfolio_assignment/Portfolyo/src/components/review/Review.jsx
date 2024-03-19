import React from 'react';

function Review() {
  return (
    <section className='h-screen flex flex-col justify-center'>

          <div className='mx-40 p-10 flex flex-col space-y-9'>

            <blockquote className='text-4xl'>
              &ldquo; The average national hourly rate for house cleaning services is $25 to $90 per individual, or $50
              to $90 per hour. The size and condition of your home will strongly impact the price of these. &rdquo;
            </blockquote>

            <div className='flex space-x-6'>
              <figure>
                <img src="./src/assets/images/client.png" alt="Alexis browni JR."
                  />
              </figure>

              <div>
                <p>Alexis browni JR.</p>

                <p>Founder of alxis co.</p>
              </div>
            </div>

          </div>

      </section>
  );
}

export default Review;