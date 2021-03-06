import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Card, Row, Col, Button} from 'react-bootstrap';
import Likes from '../components/Likes.js';

const BooksList = (props) => {
  const [state, setState] = useState({ sortOrder: "title" }); // keeps track of what we're sorting by
  let unorderedObj = props.books

  const collator = new Intl.Collator('en');
    // using Collator() to do a custom sort. Sorting the props.books array by a nested attribute value using the collator to compare strings. Allows me to render the book cards in alphabetical order.
  function SortByTitle(x, y) {
    return collator.compare(x.attributes.title, y.attributes.title);
  }

  function SortByAuthorThenTitle(x, y) {
    var authorCompare = collator.compare(x.attributes.author, y.attributes.author);
    if (authorCompare !== 0) return authorCompare;
    //Both books have the same author; sort by title
    return SortByTitle(x, y);
  }

  function HandleSortOptionChange(e) {
    setState({
      sortOrder: e.target.value
    });
  }
  // set booksArray based on the chosen sort stored in state
  let booksArray = unorderedObj.sort(state.sortOrder === "title" ? SortByTitle : SortByAuthorThenTitle);

  return (
    <div>
      <div className="sortDiv">
        <Button className="m-3" value="title" onClick={HandleSortOptionChange}>Sort by Title</Button>
        <Button className="m-3" value="author" onClick={HandleSortOptionChange}>Sort by Author</Button>
      </div>
      <Container fluid>
        <Row xs={1} md={2} lg={4} xl={6} className='g-8'>
          {booksArray.map(book =>
            <Col key={book.id} className='d-flex'>
              <Card style={{ width: '15rem' }} className='text-center p-3 m-2 mx-auto shadow'>
                <Link to={`/books/${book.attributes.id}`}>
                  <Card.Img variant='top' src={book.attributes.image_url} alt={`Cover of ${book.attributes.title}`} />
                </Link>
                <Card.Title>{book.attributes.title}</Card.Title>
                <Card.Text>by {book.attributes.author}</Card.Text>
                <Likes bookId={book.id} />
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default BooksList;