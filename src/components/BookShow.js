import React from 'react';
import {useParams, Link} from 'react-router-dom';
import ReviewsContainer from '../containers/ReviewsContainer.js';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import {deleteBook} from '../actions/deleteBook.js';

const BookShow = (props) => {
  // using the useParams() hook that comes with React Router to access the id in the URL in order to render the correct book's info in the component. Using the routerProps match didn't work here, because it didn't account for skipped ID numbers. Book id: 5 was rendering at /books/2 because it was the second book in the props array. Using useParams fixed that issue, and it accounts for deleted items in the DB. 
  const {id} = useParams();
  let book = props.books.filter(book => book.id === id)
  // check if the book was found. if not, return null (allow time for the fetchBook action to run).
  if (book.length === 0) return null;
  let bookData = (book && book[0].attributes);

  const handleDelete = (bookData) => {
    props.deleteBook(bookData.id, props.history)
  }
 
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={bookData.image_url} width='300' alt={`Cover of ${bookData.title}.`} className='p-5 mr-auto ml-auto' style={{display: 'block'}} />
        </Col>
        <Col lg={true}>
          <h2 className="header text-center pt-5">{bookData.title}</h2>
          <h3 className="font-italic text-center">{bookData.author}</h3>
          <p>{bookData.description}</p>
          <Link to={`/books/${bookData.id}/reviews/new`}>
            <Button>Create a New Review</Button>
          </Link>
          <Button variant="warning" className='m-3' onClick={() => handleDelete(bookData)}>Delete Book</Button>
        </Col>
      </Row> 
      <ReviewsContainer book={book} />
    </Container>
  )
}

export default connect(null, {deleteBook})(BookShow);