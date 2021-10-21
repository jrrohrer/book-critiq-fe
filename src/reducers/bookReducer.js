export default function booksReducer(state = {books: []}, action) {

  switch (action.type) {
    case 'FETCH_BOOKS':
      return {books: action.payload}
    case 'ADD_BOOK':
      return {...state, books: [...state.books, action.payload]}
    case 'ADD_REVIEW':
      let reviewedBooks = state.books.map(book => {
        if (book.id === action.payload.data.id) {
          return action.payload.data
        } else {
          return book
        }
      })
      return {...state, books: reviewedBooks}
    case 'DELETE_REVIEW':
      let books = state.books.map(book => {
        if (book.id === action.payload.data.id) {
          return action.payload.data
        } else {
          return book
        }
      })
      return {...state, books: books}
    case 'DELETE_BOOK':
      let postDeleteBooks = state.books.filter(book => book !== action.payload)
      return {...state, postDeleteBooks}
    default:
      return state;
  }
}