export const deleteReview = (reviewId, bookId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/books/${bookId}/reviews/${reviewId}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(book => {
      if (book.error) {
        alert(book.error)
      } else {
        dispatch({type: 'DELETE_REVIEW', payload: book})
      }
    })
    .catch(err => alert(err));
  }
}