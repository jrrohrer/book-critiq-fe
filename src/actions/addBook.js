export const addBook= (formData) => {

  return (dispatch) => {
    // thunk helping again here
    fetch('http://localhost:3001/api/v1/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(book => {
        if (book.error) {
          alert(book.error)
        } else {
          dispatch({type: 'ADD_BOOK', payload: book.data})
        }
      })
  }
}