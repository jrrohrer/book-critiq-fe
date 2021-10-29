// Functional component for rendering all the reviews associated with a book

import React from 'react';
import {connect} from 'react-redux';
import {deleteReview} from '../actions/deleteReview.js';
import {Container, Card, Button} from 'react-bootstrap';

const Reviews = (props) => {

  const handleDelete = (review) => {
    props.deleteReview(review.id, review.book_id);
  }

  return (
    <Container>
      <h2 className='header text-center bg-primary text-white'>Reviews</h2>
      {props.reviews.map(review => 
        <Card key={review.id} className='border-dark p-2 mb-2 shadow'>
          <Card.Title>{review.title}</Card.Title>
          <Card.Text>{review.content}</Card.Text>
          <Button variant='secondary' className='m-auto shadow' onClick={() => handleDelete(review)}>Delete</Button>
        </Card>
      )}
    </Container>
  )
}

export default connect(null, {deleteReview})(Reviews);