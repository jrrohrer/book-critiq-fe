import React from 'react';
import {useParams} from 'react-router-dom';



const BookShow = (props) => {
  // console.log(props)
  // let book = props.books[props.match.params.id - 1]

  const {id} = useParams();
  // let booksArray = props.books
  let book = props.books.filter(book => book.id === id)
  let bookData = (book[0]) || {};
  console.log(bookData)
  return (
    <div>
      Book id: {id}
      <br/>
      Book title: {bookData.attributes.title}
      <br/>
      Author: {bookData.attributes.author}
      <br/>
      Description: {bookData.attributes.description}
      <br/>
      <img src={bookData.attributes.image_url} alt={`Cover of ${bookData.attributes.title}.`} />

    </div>
  )
}

export default BookShow;