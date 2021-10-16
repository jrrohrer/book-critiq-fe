// functional component for displaying all books ... replace with a search form at some point

import React from 'react';
import BookShow from './BookShow.js'

const BooksList = (props) => {
  return (
    <div>
      {props.books.map(book => 
        <div key={book.id}><BookShow book={book}/></div> )}
    </div>
  )
}

export default BooksList;