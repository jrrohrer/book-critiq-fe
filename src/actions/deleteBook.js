export const deleteBook = (bookId, history) => {
  return(dispatch) => {
    fetch(`http://localhost:3001/api/v1/books/${bookId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(bookId => {
        dispatch({type: 'DELETE_BOOK', payload: bookId })
        history.push('/books')
      })
      .catch(err => alert(err));
  }
}