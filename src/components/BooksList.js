// functional component for displaying all books ... replace with a search form at some point

import React from 'react';
import {Link} from 'react-router-dom';

const BooksList = (props) => {
  let unorderedObj = props.books  
  // collator lets me do a custom sort. Here I'm sorting the props.books array (an array of book objects) by a nested attribute value using the collator to compare strings.
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