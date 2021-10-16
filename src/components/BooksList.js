// functional component for displaying all books ... replace with a search form at some point

import React from 'react';
import BookShow from './BookShow.js'

const BooksList = (props) => {
  return (
    <div>
      <ul>
        {props.books.map(book => <li key={book.id}><BookShow book={book}/></li>)}
      </ul>
    </div>
  )
}

export default BooksList;