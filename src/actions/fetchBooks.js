export function fetchBooks() {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/books')
        .then(response => response.json())
        .then(books => {
          if (books.error) {
            alert(books.error)
          } else {
            dispatch({type: 'FETCH_BOOKS', payload: books.data})
          }
        })
        .catch(err => alert(err));
      }
}