import React from 'react';


const BookShow = (props) => {
  return (
    <div>
      <h2>{props.book.attributes.title}</h2>
      <h3>{props.book.attributes.author}</h3>
      <p>{props.book.attributes.description}</p>
      <img src={props.book.attributes.image_url} alt={`Cover of ${props.book.attributes.title}`}/>
    </div>
  )
}

export default BookShow;