// functional component for displaying all books ... replace with a search form at some point

import React from 'react';
import {Link} from 'react-router-dom';

const BooksList = (props) => {
  let unorderedObj = props.books
  console.log(unorderedObj)
  
  // collator lets me do a custom sort
  const collator = new Intl.Collator('en');
  function SortArray(x, y){
    return collator.compare(x.attributes.title, y.attributes.title);
  }

  let booksArray = unorderedObj.sort(SortArray)

  return (
    <div>
      {booksArray.map(book => 
        <div key={book.id}>
          <Link to={`/books/${book.attributes.id}`}>
            {book.attributes.title}
          </Link>
        </div> 
      )}
    </div>
  )
}

export default BooksList;