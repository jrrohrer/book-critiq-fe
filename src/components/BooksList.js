// functional component for displaying all books ... replace with a search form at some point

import React from 'react';

const BooksList = (props) => {
  return (
    <div>
      {props.books.map(book => <li key={book.id}>{book.title} - {book.author}</li>)}
    </div>
  )
}

export default BooksList;