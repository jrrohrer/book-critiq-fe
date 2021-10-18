import React from 'react';
import {useParams} from 'react-router-dom';
import ReviewsContainer from '../containers/ReviewsContainer.js';

const BookShow = (props) => {
  // using the useParams() hook that comes with React Router to access the id in the URL in order to render the correct book's info in the component. Using the routerProps match didn't work here, because it didn't account for skipped ID numbers. Book id: 5 was rendering at /books/2 because it was the second book in the props array. Using useParams fixed that issue, and it accounts for deleted items in the DB. 
  const {id} = useParams();
  let book = props.books.filter(book => book.id === id)
  let bookData = (book && book[0].attributes);

  console.log(bookData)
  
  return (
    <div>
      <h2>{bookData.title}</h2>
      <br/>
      <h3>{bookData.author}</h3>
      <p>{bookData.description}</p>
      <img src={bookData.image_url} width='200' alt={`Cover of ${bookData.title}.`} />

      <ReviewsContainer book={book} />
    </div>
  )
}

export default BookShow;