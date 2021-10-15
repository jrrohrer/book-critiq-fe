// action creator
export function fetchBooks() {
  // using thunk here to dispatch the result of our fetch request asynchronously
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/books')
        .then(response => response.json())
        .then(books => dispatch({
          type: 'FETCH_BOOKS',
          payload: books
        }))
  }
}
// dispatching the new data to the reducer to pass data to the store