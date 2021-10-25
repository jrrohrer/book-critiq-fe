// functional component for displaying all books ... replace with a search/add a search function later

import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Card, Row, Col} from 'react-bootstrap';

const BooksList = (props) => {
  let unorderedObj = props.books  
  // using Collator() to do a custom sort. Sorting the props.books array by a nested attribute value using the collator to compare strings. Allows me to render the book cards in alphabetical order.
  const collator = new Intl.Collator('en');
  function SortArray(x, y){
    return collator.compare(x.attributes.title, y.attributes.title);
  }
  let booksArray = unorderedObj.sort(SortArray)

  return (
    <Container fluid>
      <Row xs={1} md={2} lg={4} xl={6} className='g-8'>
        {booksArray.map(book => 
          <Col key={book.id} className='d-flex'>
            <Card style={{width: '15rem'}} className='text-center p-3 m-2 mx-auto shadow'>
              <Link to={`/books/${book.attributes.id}`}>
                <Card.Img variant='top' src={book.attributes.image_url} alt={`Cover of ${book.attributes.title}`} />
              </Link>
              <Card.Title>{book.attributes.title}</Card.Title>
              <Card.Text>by {book.attributes.author}</Card.Text>  
            </Card> 
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default BooksList;