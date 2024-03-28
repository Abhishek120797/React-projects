import React from 'react';

function Review({user}) {


  const review = user.testimonials.map((review)=>{

    return {
      name:review.name,
      image:review.image.url,
      position:review.position,
      comment:review.review,
    }

  })

  return (
    <section className="section testi" aria-label="what our client says" id="review">
      <div className="container">

      {review.map((review,index)=>(
        <div key={index} className="testi-content">

          <blockquote className="title h4 section-text">
            &ldquo; {review.comment} &rdquo;
          </blockquote>

          <div className="profile-card">
            <figure className="card-banner img-holder" style={{"--width": "70", "--height": "70"}}>
              <img src={review.image} width="70" height="70" loading="lazy" alt={review.name}
                className="img-cover"/>
            </figure>

            <div>
              <p className="title h5 card-title">{review.name}</p>

              <p className="card-subtitle">{review.position}</p>
            </div>
          </div>

        </div>
      ))}
      </div>
    </section>
  
  );
}

export default Review;