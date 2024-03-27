import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Review() {

  const user = useOutletContext()

  const review = user.testimonials.map((review)=>{

    return {
      name:review.name,
      image:review.image.url,
      position:review.position,
      comment:review.review,
    }

  })


  return (
    <section>

          <div className='m-1 p-1 md:m-10 md:p-10'>

            <ul className='flex flex-col md:flex-row justify-center items-center md:flex-wrap '>
              {review.map((review,index)=>(

                <li key={index} 
                className='border border-gray-black m-2 p-2 md:m-4 md:p-4 h-96 w-72 flex flex-col justify-between'>

                  <blockquote >
                    &ldquo;{review.comment} &rdquo;
                  </blockquote>

                  <div className='flex flex-col justify-between'>
                    <figure className='h-16 w-16'>
                      <img src={review.image} alt={review.name} className='h-full w-full object-cover'/>
                    </figure>

                    <div>
                      <p className='text-white'>{review.name}</p>

                      <p>{review.position}</p>
                    </div>
                  </div>

                </li>

              ))}
            </ul>

          </div>

      </section>
  );
}

export default Review;