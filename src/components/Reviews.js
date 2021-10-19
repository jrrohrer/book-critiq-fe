import React from 'react';
import {connect} from 'react-redux';
import {deleteReview} from '../actions/deleteReview.js';

const Reviews = (props) => {

  const handleDelete = (review) => {
    props.deleteReview(review.id, review.book_id);
  }

  return (
    <div>
      <h2>Reviews</h2>
      {props.reviews.map(review => 
        <div key={review.id}>
          <h3>{review.title}</h3>
          <p>{review.content}</p>
          <button onClick={() => handleDelete(review)}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default connect(null, {deleteReview})(Reviews);