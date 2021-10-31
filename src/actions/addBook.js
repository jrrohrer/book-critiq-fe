export const addBook= (formData, history) => {

  return (dispatch) => {
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
        dispatch({type: 'ADD_BOOK', payload: book.data})
        history.push(`/books/${book.data.id}`)
      })
      .catch(err => alert(err));
  }
}