export const deleteReview = (reviewId, bookId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/books/${bookId}/reviews/${reviewId}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(book => dispatch({type: 'DELETE_REVIEW', payload: book}))
  }
}