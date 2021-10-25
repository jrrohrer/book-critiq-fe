// Functional component for displaying an individual book's details, as well as Review components

import React from 'react';
import {useParams, Link} from 'react-router-dom';
import ReviewsContainer from '../containers/ReviewsContainer.js';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import {deleteBook} from '../actions/deleteBook.js';

const BookShow = (props) => {

  const {id} = useParams();
  let book = props.books.filter(book => book.id === id) 
  if (book.length === 0) return null;
  let bookData = (book && book[0].attributes);

  const handleDelete = (bookData) => {
    props.deleteBook(bookData.id, props.history)
  }
 
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={bookData.image_url} width='300' alt={`Cover of ${bookData.title}.`} className='p-5 mr-auto ml-auto shadow fluid' style={{display: 'block'}} />
        </Col>
        <Col lg={true}>
          <h2 className="header text-center pt-5">{bookData.title}</h2>
          <h3 className="font-italic text-center">{bookData.author}</h3>
          <p>{bookData.description}</p>
          <Link to={`/books/${bookData.id}/reviews/new`}>
            <Button variant='secondary shadow m-3'>Create a New Review</Button>
          </Link>
          <Button variant="warning" className='shadow m-3' onClick={() => handleDelete(bookData)}>Delete Book</Button>
        </Col>
      </Row> 
      <ReviewsContainer book={book} />
    </Container>
  )
}

export default connect(null, {deleteBook})(BookShow);