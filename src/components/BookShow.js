import React from 'react';


const BookShow = (props) => {
  // console.log(props)
  let book = props.books[props.match.params.id - 1]
  // console.log(book)
  return (
    <div>
      <li>
        {book ? book.attributes.title : null}
      </li>
      {/* <h2>{book.attributes.title}</h2>
      <h3>{book.attributes.author}</h3>
      <p>{book.attributes.description}</p>
      <img src={book.attributes.image_url} alt={`Cover of ${book.attributes.title}`}/> */}
    </div>
  )
}

export default BookShow;