import React from 'react';

const Reviews = (props) => {

  return (
    <div>
      <h2>Reviews</h2>
      {props.reviews.map(review => 
        <div key={review.id}>
          <h3>{review.title}</h3>
          <p>{review.content}</p>
        </div>
      )}
    </div>
  )
}

export default Reviews;