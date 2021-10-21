export const addReview = (review, bookId) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/books/${bookId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(response => response.json())
      .then(book => dispatch({type: 'ADD_REVIEW', payload: book}))
  }
}