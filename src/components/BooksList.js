// functional component for displaying all books ... replace with a search form at some point

import React from 'react';
import {Route, Link} from 'react-router-dom';

const BooksList = (props) => {
  return (
    <div>
      {props.books.map(book => 
        <div key={book.id}>
          <Link to={`/books/${book.attributes.id}`}>{book.attributes.title}</Link>
        </div> 
      )}
    </div>
  )
}

export default BooksList;