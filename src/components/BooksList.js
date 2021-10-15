// functional component for displaying all books ... replace with a search form at some point

import React from 'react';

const BooksList = (props) => {
  return (
    <div>
      <ul>
        {props.books.map(book => <li key={book.id}>{book.attributes.title} - {book.attributes.author}</li>)}
      </ul>
    </div>
  )
}

export default BooksList;